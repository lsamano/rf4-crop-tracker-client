import React, { useState } from 'react';
import CropRow from './CropRow';
// import PropTypes from 'prop-types'

const CropsTable = ({ crops, regrow }) => {
  const [ sortBy, setSortBy ] = useState("")

  const handleClick = event => {
    const clickedText = event.target.innerText
    if (sortBy === clickedText) {
      setSortBy("")
    } else {
      setSortBy(clickedText)
    }
  }

  const activeCheck = category => {
    if (sortBy === category) {
      return "active"
    } else {
      return ""
    }
  }

  const makeHeaderRows = () => {
    const headers = ["Name", "Growth Time", "Harvest Amount"]
    if (regrow) {
      headers.push("Regrows?")
    }
    return headers.map((header, index) => {
      return (
        <th
          key={index}
          onClick={handleClick}
          className={activeCheck(header)}>
          {header}
        </th> )
    })
  }

  const formatCrops = () => {
    let sortedCrops = [...crops]
    if (sortBy === "Name") {
      sortedCrops = sortedCrops.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "Growth Time") {
      sortedCrops = sortedCrops.sort(((a, b) => b.grow_time - a.grow_time))
    } else if (sortBy === "Harvest Amount") {
      sortedCrops = sortedCrops.sort(((a, b) => a.harvest_amount - b.harvest_amount))
    } else if (sortBy === "Regrows?") {
      sortedCrops = sortedCrops.sort(((a, b) => b.regrows - a.regrows))
    }
    return sortedCrops.map(crop => {
      return <CropRow key={crop.id} includeRegrow={regrow} {...crop} />
    })
  }

  return (
    <table>
      <thead>
        <tr>
          { makeHeaderRows() }
          {/*<th>Level</th>*/}
        </tr>
      </thead>
      <tbody>{ formatCrops() }</tbody>
    </table>
  )
}

export default CropsTable

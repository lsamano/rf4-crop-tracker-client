import React, { useState } from 'react';
import CropRow from './CropRow';
// import PropTypes from 'prop-types'

const CropsTable = ({ crops, regrow, title }) => {
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
    const headers = ["Name", "Grow Time", "Harvest Amount"]
    if (regrow) {
      headers.push("Regrows")
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
    let sortedCrops = [ ...crops ]
    if (sortBy === "Name") {
      sortedCrops = sortedCrops.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy) {
      const sortKey = sortBy.toLowerCase().replace(/\s/g, "_");
      sortedCrops = sortedCrops.sort(((a, b) => b[sortKey] - a[sortKey]))
    }
    return sortedCrops.map(crop => {
      return <CropRow key={crop.id} includeRegrow={regrow} {...crop} />
    })
  }

  return (
    <div>
    <h4>{ title }</h4>
    <table>
      <thead>
        <tr>
          { makeHeaderRows() }
          {/*<th>Level</th>*/}
        </tr>
      </thead>
      <tbody>{ formatCrops() }</tbody>
    </table>
  </div>
  )
}

export default CropsTable

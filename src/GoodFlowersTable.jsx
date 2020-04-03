import React, { useState } from 'react';
import FlowerRow from './FlowerRow';
// import PropTypes from 'prop-types'

const GoodFlowersTable = ({ goodFlowers }) => {
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
    return headers.map(header => {
      return (
        <th
          onClick={handleClick}
          className={activeCheck(header)}>
          {header}
        </th> )
    })
  }

  const formatGoodFlowers = () => {
    let sortedFlowers = [...goodFlowers]
    if (sortBy === "Name") {
      sortedFlowers = sortedFlowers.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "Growth Time") {
      sortedFlowers = sortedFlowers.sort(((a, b) => a.grow_time - b.grow_time))
    } else if (sortBy === "Harvest Amount") {
      sortedFlowers = sortedFlowers.sort(((a, b) => a.harvest_amount - b.harvest_amount))
    } else if (sortBy === "Regrows?") {
      sortedFlowers = sortedFlowers.sort(((a, b) => b.regrows - a.regrows))
    }
    return sortedFlowers.map(crop => {
      return <FlowerRow key={crop.id} {...crop} />
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
      <tbody>{ formatGoodFlowers() }</tbody>
    </table>
  )
}

export default GoodFlowersTable

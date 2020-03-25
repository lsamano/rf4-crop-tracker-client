import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CropRow from './CropRow';

const Season = ({ name, liked_crops }) => {
  const [ sortBy, setSortBy ] = useState("")

  const handleClick = event => {
    const clickedText = event.target.innerText
    if (sortBy === clickedText) {
      setSortBy("")
    } else {
      setSortBy(clickedText)
    }
  }

  const formatGoodCrops = () => {
    let sortedCrops = [...liked_crops]
    if (sortBy === "Name") {
      sortedCrops = sortedCrops.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "Growth Time") {
      sortedCrops = sortedCrops.sort(((a, b) => a.grow_time - b.grow_time))
    } else if (sortBy === "Harvest Amount") {
      sortedCrops = sortedCrops.sort(((a, b) => a.harvest_amount - b.harvest_amount))
    } else if (sortBy === "Regrows?") {
      sortedCrops = sortedCrops.sort(((a, b) => b.regrows - a.regrows))
    }
    return sortedCrops.map(crop => {
      return <CropRow key={crop.id} {...crop} />
    })
  }

  const activeCheck = category => {
    if (sortBy === category) {
      return "active"
    } else {
      return ""
    }
  }

  const makeHeaderRows = () => {
    const headers = ["Name", "Growth Time", "Harvest Amount", "Regrows?"]
    return headers.map(header => {
      return (
        <th
          onClick={handleClick}
          className={activeCheck(header)}>
          {header}
        </th> )
    })

  }

  return (
    <div className="seasons">
    <h1>{name.toUpperCase()}</h1>
    <table>
      <thead>
        <tr>
          { makeHeaderRows() }
          {/*<th>Level</th>*/}
        </tr>
      </thead>
      <tbody>{formatGoodCrops()}</tbody>
    </table>
  </div>
  );
}

Season.propTypes = {
  name: PropTypes.string,
  liked_crops: PropTypes.array
};

export default Season;

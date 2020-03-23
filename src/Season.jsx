import React from 'react';
import PropTypes from 'prop-types';

const Season = ({ name, liked_crops }) => {
  const goodCrops = liked_crops.map(crop => {
    return <tr key={crop.id}>
      <td>{crop.name}</td>
      <td>{crop.grow_time}</td>
      <td>{crop.harvest_amount}</td>
      <td>{crop.regrows && "✅"}</td>
    </tr>
  })

  return (
    <div className="seasons">
    <h1>{name.toUpperCase()}</h1>
    <table>
      <thead>
        <tr>
          <th> Name </th>
          <th> Growth Time </th>
          <th> Harvest Amount </th>
          <th> Regrows? </th>
        </tr>
      </thead>
      <tbody>{goodCrops}</tbody>
    </table>
  </div>
  );
}

Season.propTypes = {
  name: PropTypes.string,
  liked_crops: PropTypes.array
};

export default Season;

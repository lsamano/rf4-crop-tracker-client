import React from 'react';
import PropTypes from 'prop-types';
import GoodCropsTable from './GoodCropsTable';

const Season = ({ name, liked_crops, liked_flowers }) => {
  // const formatGoodFlowers = () => {
  //   return liked_flowers.map(crop => {
  //     return <CropRow key={crop.id} {...crop} />
  //   })
  // }

  return (
    <div className="seasons">
    <h1>{name.toUpperCase()}</h1>
    <GoodCropsTable goodCrops={liked_crops} />
    <table>
      <thead>
        <tr>
          { null }
          {/*<th>Level</th>*/}
        </tr>
      </thead>
      <tbody>{null}</tbody>
    </table>
  </div>
  );
}

Season.propTypes = {
  name: PropTypes.string,
  liked_crops: PropTypes.array,
  liked_flowers: PropTypes.array
};

export default Season;

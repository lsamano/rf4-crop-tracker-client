import React from 'react';
import PropTypes from 'prop-types';
import GoodCropsTable from './GoodCropsTable';
import GoodFlowersTable from './GoodFlowersTable';

const Season = ({ name, liked_crops, liked_flowers }) => {
  return (
    <div className="seasons">
    <h1>{name.toUpperCase()}</h1>
    <GoodCropsTable goodCrops={liked_crops} />
    <GoodFlowersTable goodFlowers={liked_flowers} />
  </div>
  );
}

Season.propTypes = {
  name: PropTypes.string,
  liked_crops: PropTypes.array,
  liked_flowers: PropTypes.array
};

export default Season;

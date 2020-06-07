import React from 'react';
import PropTypes from 'prop-types';
import GoodCropsTable from './GoodCropsTable';
import GoodFlowersTable from './GoodFlowersTable';

const Season = ({ name, liked_crops, liked_flowers, neutral_crops }) => {
  // <h2>{name.toUpperCase()}</h2>
  return (
    <>
      <div className="seasons">
        <GoodCropsTable goodCrops={liked_crops} />
        <GoodFlowersTable goodFlowers={liked_flowers} />
        <GoodCropsTable goodCrops={neutral_crops} />
      </div>
    </>
  );
}

Season.propTypes = {
  name: PropTypes.string,
  liked_crops: PropTypes.array,
  liked_flowers: PropTypes.array
};

export default Season;

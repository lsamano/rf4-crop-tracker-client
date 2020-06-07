import React from 'react';
import PropTypes from 'prop-types';
import CropsTable from './CropsTable';
import FlowersTable from './FlowersTable';

const Season = ({ name, liked_crops, liked_flowers, neutral_crops }) => {
  // <h2>{name.toUpperCase()}</h2>
  return (
    <>
      <div className="seasons">
        <CropsTable crops={liked_crops} />
        <FlowersTable flowers={liked_flowers} />
        <CropsTable crops={neutral_crops} />
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

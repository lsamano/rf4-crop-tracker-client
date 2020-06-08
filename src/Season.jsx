import React from 'react';
import PropTypes from 'prop-types';
import CropsTable from './CropsTable';

const Season = ({ name, liked_crops, liked_flowers, neutral_crops }) => {
  return (
      <div className="seasons">
        <CropsTable crops={liked_crops} regrow={true} title={"Crops"} />
        {liked_flowers.length > 0
          && <CropsTable crops={liked_flowers} regrow={false} title={"Flowers"} />}
        {neutral_crops.length > 0
          && <CropsTable crops={neutral_crops} regrow={true} title={"Neutrals"} />}
      </div>
  );
}

Season.propTypes = {
  name: PropTypes.string,
  liked_crops: PropTypes.array,
  liked_flowers: PropTypes.array
};

export default Season;

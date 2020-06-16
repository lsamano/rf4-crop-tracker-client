import React from 'react';
import PropTypes from 'prop-types';
import CropsTable from './CropsTable';

const Season = ({
  name,
  likeToggle,
  liked_crops, liked_flowers,
  neutral_crops,
  hated_crops, hated_flowers
}) => {

  const showSeason = () => {
    if (likeToggle) {
      return (
        <div className="seasons">
          <CropsTable crops={liked_crops} regrow={true} title={"In-Season Crops"} />
          {liked_flowers.length > 0
            && <CropsTable crops={liked_flowers} regrow={false} title={"In-Season Flowers"} />}
            {neutral_crops.length > 0
              && <CropsTable crops={neutral_crops} regrow={true} title={"Neutrals"} />}
            </div>
          );
        } else {
          return (
            <div className="seasons">
              { hated_crops.length > 0 ? <CropsTable crops={hated_crops} regrow={true} title={"Out-of-Season Crops"} /> : "None" }
              { hated_flowers.length > 0
                && <CropsTable crops={hated_flowers} regrow={false} title={"Out-of-Season Flowers"} />}
              </div>
            )
          }
  }

  return (
    <div>
      { showSeason() }
    </div>
  )
}

Season.propTypes = {
  name: PropTypes.string,
  // likeToggle: PropTypes.boolean,
  liked_crops: PropTypes.array,
  liked_flowers: PropTypes.array,
  neutral_crops: PropTypes.array,
  hated_crops: PropTypes.array,
  hated_flowers: PropTypes.array
};

export default Season;

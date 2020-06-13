import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CropsTable from './CropsTable';

const Season = ({
  name,
  liked_crops, liked_flowers,
  neutral_crops,
  hated_crops, hated_flowers
}) => {
  const [ likeToggle, setLikeToggle ] = useState(false)

  const showSeason = () => {
    if (likeToggle) {
      return (
        <div className="seasons">
          <CropsTable crops={liked_crops} regrow={true} title={"Crops"} />
          {liked_flowers.length > 0
            && <CropsTable crops={liked_flowers} regrow={false} title={"Flowers"} />}
            {neutral_crops.length > 0
              && <CropsTable crops={neutral_crops} regrow={true} title={"Neutrals"} />}
            </div>
          );
        } else {
          return (
            <div className="seasons">
              <CropsTable crops={hated_crops} regrow={true} title={"Hated Crops"} />
              { hated_flowers.length > 0
                && <CropsTable crops={hated_flowers} regrow={false} title={"Hated Flowers"} />}
              </div>
            )
          }
  }

  return (
    <div>
      <button onClick={() => setLikeToggle(!likeToggle)}>
        {likeToggle ? "Click to Show Out-of-Season" : "Click to Show In-Season and Neutrals"}
      </button>
      { showSeason() }
    </div>
  )
}

Season.propTypes = {
  name: PropTypes.string,
  liked_crops: PropTypes.array,
  liked_flowers: PropTypes.array
};

export default Season;

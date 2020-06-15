import React, { useState } from 'react';
import Season from './Season';

const DropdownWithSeason = ({ seasons }) => {
    const [ seasonIndex, setSeasonIndex ] = useState(0)
    const [ likeToggle, setLikeToggle ] = useState(true)
    const theSeason = seasons[seasonIndex]

  const formOptions = seasons.map(
    season => <option value={season.id - 1} key={season.id}>{season.name}</option>
  )

  const handleChange = event => {
    setSeasonIndex(event.target.value)
  }

  const chosenSeason = () => {
    return <Season key={theSeason.id} likeToggle={likeToggle} { ...theSeason } />
  }

  return (
    <div>

        <label htmlFor="seasons">Choose a season:</label>
        <select name="seasons" id="seasons" onChange={handleChange}>
          { formOptions }
        </select>

      <h2>{theSeason.name.toUpperCase()}</h2>

      <button onClick={() => setLikeToggle(!likeToggle)}>
        {likeToggle ? "Click to Show Out-of-Season" : "Click to Show In-Season and Neutrals"}
      </button>
      { chosenSeason() }
    </div>
  );
}

export default DropdownWithSeason;

import React, { useState } from 'react';
import Season from './Season';

const DropdownWithSeason = ({ seasons }) => {
    const [ seasonIndex, setSeasonIndex ] = useState(0)

  const formOptions = seasons.map(
    season => <option value={season.id - 1}>{season.name}</option>
  )
  const handleChange = event => {
    setSeasonIndex(event.target.value)
  }

  const chosenSeason = () => {
    const theSeason = seasons[seasonIndex]
    if (!!theSeason) {
      return <Season key={theSeason.id} { ...theSeason } />
    } else {
      return "Loading..."
    }
  }

  return (
    <div>
      <form>
        <label for="seasons">Choose a season:</label>
        <select name="seasons" id="seasons" onChange={handleChange}>
          { formOptions }
        </select>
      </form>

      { chosenSeason() }
    </div>
  );
}

export default DropdownWithSeason;

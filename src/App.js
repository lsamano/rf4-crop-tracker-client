import React, { useEffect, useState } from 'react';
import './App.css';
import Season from './Season';

function App() {
  const [ seasons, setSeasons ] = useState([])
  const [ seasonIndex, setSeasonIndex ] = useState(0)

  useEffect(() => {
    fetch("http://localhost:3000/seasons")
    .then(res => res.json())
    .then(seasons => setSeasons(seasons))
  }, [])

  const allSeasons = seasons.map(season => {
    return <Season key={season.id} { ...season } />
  })

  const formOptions = seasons.map(
    season => <option value={season.id - 1}>{season.name}</option>
  )

  const chosenSeason = () => {
    const theSeason = seasons[seasonIndex]
    if (!!theSeason) {
      return <Season key={theSeason.id} { ...theSeason } />
    } else {
      return "Loading..."
    }
  }

  const handleChange = event => {
    setSeasonIndex(event.target.value)
  }

  return (
    <div className="seasons">

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

export default App;

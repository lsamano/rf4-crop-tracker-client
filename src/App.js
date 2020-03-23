import React, { useEffect, useState } from 'react';
import './App.css';
import Season from './Season';

function App() {
  const [ seasons, setSeasons ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/seasons")
    .then(res => res.json())
    .then(seasons => setSeasons(seasons))
  }, [])
  const allSeasons = seasons.map(season => <Season key={season.id} { ...season } />)

  return (
    <div className="seasons">
      { allSeasons }
    </div>
  );
}

export default App;

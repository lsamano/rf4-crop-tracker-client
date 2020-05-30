import React, { useEffect, useState } from 'react';
import './App.css';
import DropdownWithSeason from './DropdownWithSeason';

function App() {
  const [ seasons, setSeasons ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/seasons")
    .then(res => res.json())
    .then(seasons => setSeasons(seasons))
  }, [])

  return (
    <div className="seasons">
      <DropdownWithSeason seasons={seasons} />
    </div>
  );
}

export default App;

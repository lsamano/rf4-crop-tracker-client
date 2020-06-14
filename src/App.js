import React, { useEffect, useState, Suspense, lazy } from 'react';
 const DropdownWithSeason = lazy(() => import('./DropdownWithSeason'));

function App() {
  const [ seasons, setSeasons ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/seasons")
    .then(res => res.json())
    .then(seasons => setSeasons(seasons))
  }, [])

  return (
    <div className="seasons">
      <Suspense fallback={<div>NOW LOADING...</div>}>
        <DropdownWithSeason seasons={seasons} />
      </Suspense>
    </div>
  );
}

export default App;

import React, { useEffect, useState, Suspense, lazy } from 'react';
 const DropdownWithSeason = lazy(() => import('./DropdownWithSeason'));

function App() {
  const [ seasons, setSeasons ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/seasons")
    .then(res => res.json())
    .then(seasons => setSeasons(seasons))
  }, [])

   const loadDropdownWithSeason = () => {
     if (seasons.length > 0) {
       return <DropdownWithSeason seasons={seasons} />
     } else {
       return null
     }
   }

  return (
    <div className="seasons">
      <Suspense fallback={<div>NOW LOADING...</div>}>
        { loadDropdownWithSeason() }
      </Suspense>
    </div>
  );
}

export default App;

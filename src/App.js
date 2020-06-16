import React, { useEffect, useState, Suspense, lazy } from 'react';
const DropdownWithSeason = lazy(() => import('./DropdownWithSeason'));

function App() {
  const [ loading, setLoading ] = useState(true)
  const [ seasons, setSeasons ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/seasons")
    .then(res => res.json())
    .then(seasons => {
      setSeasons(seasons)
      setLoading(false)
    })
  }, [])

   const loadDropdownWithSeason = () => {
     return loading ? null : <DropdownWithSeason seasons={seasons} />
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

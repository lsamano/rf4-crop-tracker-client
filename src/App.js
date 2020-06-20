import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
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

   const loadDropdownWithSeason = routerProps => {
     return (
       <div className="seasons">
         <Suspense fallback={<div>NOW LOADING...</div>}>
           { loading ? null : <DropdownWithSeason seasons={seasons} {...routerProps} /> }
         </Suspense>
       </div>
     )
   }

  return (
    <Switch>
      <Route path="/view-one-season" render={loadDropdownWithSeason} />
    </Switch>

  );
}

export default App;

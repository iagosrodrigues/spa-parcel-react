import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))

export default () => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </React.Suspense>
)

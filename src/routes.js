import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import One from './pages/One'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/1" component={One} />
    </Switch>
  )
}

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/1" component={One} />
      <Route path="/2" component={Two} />
      <Route path="/3" component={Three} />
    </Switch>
  )
}

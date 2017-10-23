import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Main from 'views/Main'
import Second from 'views/Second'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/second" component={Second}/>
      </Switch>
    </Router>
  )
}

export default Routes

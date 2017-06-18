import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link // eslint-disable-line
} from 'react-router-dom'

import muiThemeable from 'material-ui/styles/muiThemeable'
import AboutMe from './AboutMe'
import Message from './Message'

class Navigation extends Component {
  render () {
    return (
      <Router basename={window.__LOCALE__}>
        <div>
          <Route exact path='/' component={AboutMe} />
          <Route path='/message' component={Message} />
        </div>
      </Router>
    )
  }
}

export default muiThemeable()(Navigation)

import React, { Component } from 'react'
import Navigation from './Navigation'
import { connect } from 'react-redux'
import StartupActions from '../../shared/Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

class RootContainer extends Component {

  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (
      <Navigation />
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)

import React, { Component } from 'react'
import Navigation from './Navigation'
import { connect } from 'react-redux'
import StartupActions from '../../shared/Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

/*import {IntlProvider, addLocaleData} from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import zhLocaleData from 'react-intl/locale-data/zh'

if (!global.Intl) {
  global.Intl = require('intl')
}

addLocaleData([...enLocaleData, ...zhLocaleData])*/

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

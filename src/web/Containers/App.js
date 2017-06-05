import '../Config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MyTheme from '../Themes/MyTheme'
import RootContainer from './RootContainer'
import createStore from '../Redux'

import {IntlProvider, addLocaleData} from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import zhLocaleData from 'react-intl/locale-data/zh'

if (!global.Intl) {
  global.Intl = require('intl')
}

addLocaleData([...enLocaleData, ...zhLocaleData])

// material-ui: Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(MyTheme)}>
          <IntlProvider locale={window.__LOCALE__} messages={window.__TRANSLATION__}>
            <RootContainer />
          </IntlProvider>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App

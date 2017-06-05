import '../Config'
import React, { Component } from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'

import DeviceInfo from 'react-native-device-info'
import {IntlProvider, addLocaleData} from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import zhLocaleData from 'react-intl/locale-data/zh'

addLocaleData([...enLocaleData, ...zhLocaleData])

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
    const locale = DeviceInfo.getDeviceLocale()
    return (
      <Provider store={store}>
        <IntlProvider
          locale={locale}
          messages={locale === 'en' ? require('../../shared/Translations/en_US').default : require('../../shared/Translations/zh_CN').default}
          textComponent={Text}>
          <RootContainer />
        </IntlProvider>
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design
const AppWithBenefits = console.tron.overlay(App)

export default AppWithBenefits

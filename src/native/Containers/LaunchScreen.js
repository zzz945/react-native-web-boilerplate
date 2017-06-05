import React from 'react'
import {FormattedMessage} from 'react-intl'
import { Text, View } from 'react-native'
import { Colors } from '../Themes'
import Api from '../../shared/Services/Api'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visit: 0
    }
    Api.create().getVisit().then(response => {
      if (response.ok) this.setState({visit: response.data})
      else this.setState({visit: -1})
    })
  }

  getMessage = () => {
    if (this.state.visit === 0) return <FormattedMessage id='state.loading' />
    else if (this.state.visit === -1) return <FormattedMessage id='state.error.network' />
    else {
      return (
        <FormattedMessage
          id='introduction.title'
          values={{
            count: <Text style={{color: Colors.primary1Color}}>{this.state.visit}</Text>
          }}
        />
      )
    }
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.centered}>
          <Text style={styles.titleText}>
            {this.getMessage()}
          </Text>
        </View>
      </View>
    )
  }
}

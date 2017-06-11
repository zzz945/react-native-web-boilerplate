import React from 'react'
import { connect } from 'react-redux'
import {FormattedMessage} from 'react-intl'
import { Text, View } from 'react-native'
import { ActionButton } from 'react-native-material-ui'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends React.Component {
  getMessage = () => {
    const {visit, fetching, error} = this.props.visit
    if (fetching) return <FormattedMessage id='state.loading' />
    else if (error) return <FormattedMessage id='state.error.network' />
    else {
      return (
        <FormattedMessage
          id='introduction.title'
          values={{
            count: <Text style={{color: Colors.primary1Color}}>{visit}</Text>
          }}
        />
      )
    }
  }
  handlePress = () => {
    const { navigate } = this.props.navigation
    navigate('MessagesScreen')
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.sectionTop}>
          <Text style={styles.title}>
            {this.getMessage()}
          </Text>
        </View>
        <View style={styles.sectionBottom}>
          <Text style={styles.sectionTitle}>
            <FormattedMessage id='header.title' />
          </Text>
          <Text style={styles.sectionText}>
            <FormattedMessage id='header.description' />
          </Text>
          <Text style={styles.sectionText}>
            <FormattedMessage id='email' /><Text>:18504211831@163.com</Text>
          </Text>
        </View>
        <ActionButton
          icon='chat'
          onPress={this.handlePress}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    visit: state.visit
  }
}

export default connect(mapStateToProps, null)(LaunchScreen)

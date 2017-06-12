import React from 'react'
import { connect } from 'react-redux'
import {Akira} from 'react-native-textinput-effects'
import { Button, Toolbar } from 'react-native-material-ui'
import {FormattedMessage} from 'react-intl'
import { Text, View } from 'react-native'
import Modal from 'react-native-modal'
import MessageActions from '../../shared/Redux/MessageRedux'

// Styles
import styles, {borderColor} from './Styles/MessagesScreenStyles'

class MessagesScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
      title: '',
      email: '',
      content: ''
    }
  }

  handleCancelPress = () => {
    this.props.navigation.goBack()
  }

  handleSendPress = () => {
    this.props.sendMessage({
      title: this.state.title,
      email: this.state.email,
      content: this.state.content
    })
  }

  handleOkPress = () => {
    this.setState({modalVisible: false})
    this.props.navigation.goBack()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps !== this.props && this.props.sending &&
        !nextProps.sending && nextProps.error === null) {
      this.setState({modalVisible: true})
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Modal
          style={styles.bottomModal}
          isVisible={this.state.modalVisible}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalText}><FormattedMessage id='messages.modal.content' /></Text>
            <Button
              style={{container: styles.modalButtonContainer}}
              onPress={this.handleOkPress}
              text={<FormattedMessage id='messages.modal.ok' />}
              upperCase={false}
              raised
              primary
            />
          </View>
        </Modal>
        <Toolbar
          leftElement='arrow-back'
          onLeftElementPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}><FormattedMessage id='messages.title' /></Text>
          <Text style={styles.description}><FormattedMessage id='messages.description' /></Text>
        </View>
        <View style={styles.form}>
          <Akira
            label={<FormattedMessage id='messages.form.title' />}
            // this is used as active and passive border color
            borderColor={borderColor}
            labelStyle={styles.label}
            value={this.state.title}
            onChangeText={text => this.setState({title: text})}
          />
          <Akira
            label={<FormattedMessage id='messages.form.email' />}
            // this is used as active and passive border color
            borderColor={borderColor}
            labelStyle={styles.label}
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
          />
          <Akira
            label={<FormattedMessage id='messages.form.content' />}
            // this is used as active and passive border color
            borderColor={borderColor}
            labelStyle={styles.label}
            value={this.state.content}
            onChangeText={text => this.setState({content: text})}
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            style={{container: styles.modalButtonContainer}}
            onPress={this.handleSendPress}
            text={<FormattedMessage id='messages.button.send' />}
            upperCase={false}
            raised
            primary
          />
          <Button
            style={{container: styles.modalButtonContainer}}
            onPress={this.handleCancelPress}
            text={<FormattedMessage id='messages.button.cancel' />}
            upperCase={false}
            raised
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sending: state.message.sending,
    error: state.message.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => dispatch(MessageActions.messagePost(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen)

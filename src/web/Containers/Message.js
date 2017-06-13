import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'
import {FormattedMessage} from 'react-intl'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'

import MessageActions from '../../shared/Redux/MessageRedux'
import Topbar from './Topbar'
import {HCenter, TitleDark, SubTitleDark} from './CommonStyledComponents'

const Container = styled(HCenter)`
  margin-top: 100px;
`

class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
      title: '',
      email: '',
      content: ''
    }
  }

  handleSend = () => {
    this.props.sendMessage({
      title: this.state.title,
      email: this.state.email,
      content: this.state.content
    })
  }

  handleBack= () => {
    this.props.history.goBack()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps !== this.props && this.props.sending &&
        !nextProps.sending && nextProps.error === null) {
      this.setState({modalVisible: true})
    }
  }

  render () {
    return (
      <Container>
        <Topbar />
        <div>
          <TitleDark><FormattedMessage id='messages.title' /></TitleDark>
          <SubTitleDark><FormattedMessage id='messages.description' /></SubTitleDark><br />
          <TextField
            hintText={<FormattedMessage id='messages.form.title' />}
            value={this.state.title}
            onChange={(e, text) => this.setState({title: text})}
          /><br />
          <TextField
            hintText={<FormattedMessage id='messages.form.email' />}
            value={this.state.email}
            onChange={(e, text) => this.setState({email: text})}
          /><br />
          <TextField
            hintText={<FormattedMessage id='messages.form.content' />}
            multiLine
            rows={2}
            rowsMax={4}
            value={this.state.content}
            onChange={(e, text) => this.setState({content: text})}
          /><br />
          <div>
            <RaisedButton
              onClick={this.handleBack}
              style={{fontSize: 12}}
              label={<FormattedMessage id='messages.button.cancel' />}
            />
            <RaisedButton
              onClick={this.handleSend}
              style={{fontSize: 12}}
              label={<FormattedMessage id='messages.button.send' />}
              primary
            />
          </div>
        </div>
        <Snackbar
          open={this.state.modalVisible}
          message={<FormattedMessage id='messages.modal.content' />}
          autoHideDuration={4000}
          onRequestClose={() => this.setState({modalVisible: false})}
        />
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(Message))

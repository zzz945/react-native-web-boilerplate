import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'

export default class ModalTest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
  }

  _showModal = () => {
    console.log(this.state)
    this.setState({ isModalVisible: true })
  }

  _hideModal = () => this.setState({ isModalVisible: false })

  render () {
    return (
      <View style={{ flex: 1, marginTop: 100 }}>
        <TouchableOpacity onPress={this._showModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
          </View>
          <TouchableOpacity onPress={this._hideModal}>
            <Text>Hide Modal</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    )
  }
}

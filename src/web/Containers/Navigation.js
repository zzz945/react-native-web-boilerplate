import React, { Component } from 'react'
import styled from 'styled-components'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import muiThemeable from 'material-ui/styles/muiThemeable'

import Topbar from './Topbar'

const Container = styled.div`
  display: flex;
`

const Header = muiThemeable()(styled.div`
  padding-top: 128px;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 512px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.muiTheme.palette.primary2Color};
  background-image: url(${require('../Images/header1280.png')});
  background-blend-mode: overlay;
`)

const HeaderTitle = muiThemeable()(styled.h1`
  text-align: center;
  color: ${props => props.muiTheme.palette.alternateTextColor};
`)

class Navigation extends Component {
  styles = {
    container: {
      display: 'flex'
    },
    header: {
      paddingTop: 128,
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      height: 512,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: this.props.muiTheme.palette.primary2Color,
      backgroundImage: `url(${require('../Images/header1280.png')})`,
      backgroundBlendMode: 'overlay'
    },
    headerTitle: {
      textAlign: 'center',
      color: 'white'
    }
  }

  render () {
    return (
      <Router>
        <Container>
          <Topbar />
          <Header>
            <h1 style={this.styles.headerTitle}>你好，我叫张岱岩，一个全栈设计师</h1>
          </Header>
        </Container>
      </Router>
    )
  }
}

export default muiThemeable()(Navigation)

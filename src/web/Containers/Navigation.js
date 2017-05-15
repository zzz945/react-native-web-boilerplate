import React, { Component } from 'react'
import styled from 'styled-components'

import {
  BrowserRouter as Router,
  Route, // eslint-disable-line
  Link // eslint-disable-line
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
  render () {
    return (
      <Router>
        <Container>
          <Topbar />
          <Header>
            <HeaderTitle>你好，我叫张岱岩，一个全栈设计师</HeaderTitle>
          </Header>
        </Container>
      </Router>
    )
  }
}

export default muiThemeable()(Navigation)

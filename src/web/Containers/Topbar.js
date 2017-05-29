import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'

import {Center} from './CommonStyledComponents'

const Container = muiThemeable()(styled.nav`
  z-index: 1001;
  display: flex;
  position: fixed;
  top: 0;
  height: 75px;
  width: 100%;
  box-shadow: 0px 0px 3px ${props => props.muiTheme.palette.shadowColor};;
  background: ${props => props.isTransparent ? 'rgba(255, 255, 255, 0.25)' : props.muiTheme.palette.canvasColor};
  transition: all .3s ease-in-out;
`)

// eslint-disable-next-line
const NavLink = muiThemeable()(styled.a`
  font-size: 12px;
  text-decoration: none;
  margin: 0 10px;
  color: ${props => props.isTransparent ? props.muiTheme.palette.alternateTextColor : '#898989'};
  &:hover {
    color: ${props => props.muiTheme.palette.primary1Color};
  }
`)

const Logo = muiThemeable()(styled.a`
  display: block;
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.isTransparent ? props.muiTheme.palette.alternateTextColor : props.muiTheme.palette.primary1Color};
  &:hover {
    color: ${props => props.muiTheme.palette.textColor};
  }
`)

class Topbar extends Component {
  render () {
    return (
      <Container isTransparent={this.props.isTransparent}>
        <Center style={{flex: 1, margin: '0 28px', justifyContent: 'space-between'}}>
          <Logo isTransparent={this.props.isTransparent} href='#'>ET</Logo>
          <RaisedButton href='mailto:zhangdaiyan@163.com' style={{fontSize: 12, marginLeft: 24}} label={'与我联系'} primary />
        </Center>
      </Container>
    )
  }
}

export default muiThemeable()(Topbar)

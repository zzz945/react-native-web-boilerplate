import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'
import {FormattedMessage} from 'react-intl'

import ENV from '../../ENV'
import {Center, Link} from './CommonStyledComponents'

const Container = muiThemeable()(styled.nav`
  z-index: ${props => props.muiTheme.zIndex.appBar};
  display: flex;
  position: fixed;
  top: 0;
  height: 75px;
  width: 100%;
  box-shadow: 0px 0px 3px ${props => props.muiTheme.palette.shadowColor};
  background: ${props => props.isTransparent ? 'rgba(255, 255, 255, 0.25)' : props.muiTheme.palette.canvasColor};
  transition: all .3s ease-in-out;
`)

const LocaleLink = muiThemeable()(styled(Link)`
  font-size: 12px;
  color: ${props => props.isTransparent ? props.muiTheme.palette.alternateTextColor : props.muiTheme.palette.thirdTextColor};
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
  handleClick = () => {
    this.props.history.push('/message')
  }
  render () {
    let {isTransparent} = this.props
    let {alternateTextColor, thirdTextColor} = this.props.muiTheme.palette
    return (
      <Container isTransparent={isTransparent}>
        <Center style={{flex: 1, padding: `0 ${this.props.muiTheme.spacing.desktopGutter}px`, justifyContent: 'space-between'}}>
          <Logo isTransparent={isTransparent} href='#'>ET</Logo>
          <div>
            <span style={{fontSize: 12, color: isTransparent ? alternateTextColor : thirdTextColor}}>
              <LocaleLink
                isTransparent={isTransparent}
                href={`${ENV.baseURL}zh`}>
                中文
              </LocaleLink>
              /
              <LocaleLink
                isTransparent={isTransparent}
                href={`${ENV.baseURL}en`}>
                English
              </LocaleLink>
            </span>
            <RaisedButton
              onClick={this.handleClick}
              style={{fontSize: 12, marginLeft: 24}}
              label={<FormattedMessage id='nav.contact' />}
              primary />
          </div>
        </Center>
      </Container>
    )
  }
}

export default muiThemeable()(Topbar)

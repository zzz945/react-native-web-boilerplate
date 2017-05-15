import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'

import {
  Link
} from 'react-router-dom'

const Container = styled.div`
  position: fixed;
  top: 0;
  height: 128px;
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;
`

const MyPhotoAvatar = muiThemeable()(styled(Avatar)`
  marginTop: 32px;
  border: ${props => '8px solid ' + props.muiTheme.palette.alternateTextColor};
`)

const NavLink = muiThemeable()(styled(Link)`
  color: ${props => props.primary ? props.muiTheme.palette.alternateTextColor : props.muiTheme.palette.borderColor};
  font-size: 16px;
  text-decoration: none;
  margin: 10px;
  &:hover {
    color: ${props => props.muiTheme.palette.alternateTextColor};
  }
`)

const Nav = styled.div`
  display: flex;
  alignItems: center;
`

class Topbar extends Component {
  styles = {
    nav: {
      display: 'flex',
      alignItems: 'center'
    }
  }

  render () {
    return (
      <Container>
        <Wrapper>
          <MyPhotoAvatar src={require('../Images/myphoto.png')} size={64} />
          <Nav>
            <NavLink primary to='/'>我的故事</NavLink>
            <NavLink to='/'>我的研究</NavLink>
            <NavLink to='/'>我想说</NavLink>
          </Nav>
        </Wrapper>
      </Container>
    )
  }
}

export default muiThemeable()(Topbar)

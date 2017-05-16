import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'
import Svg from '../Images/Svg'

import {
  Link
} from 'react-router-dom'

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
`

const MyPhotoAvatar = muiThemeable()(styled(Avatar)`
  margin: 16px 16px 16px 0;
  border: 2px solid ${props => props.muiTheme.palette.alternateTextColor};
`)

const NavLink = muiThemeable()(styled(Link)`
  color: ${props => props.muiTheme.palette.alternateTextColor};
  font-size: 16px;
  text-decoration: none;
  margin: 32px 10px;
  &:hover {
    color: ${props => props.muiTheme.palette.primary1Color};
  }
`)

const Nav = styled.div`
  display: flex;
  alignItems: center;
`

const ContactWrapper = styled.div`
  display: flex;
  alignItems: center;
`

const ContactIcon = muiThemeable()(
  ({style, svgData, muiTheme}) => {
    return (
      <Svg.SvgCustomIcon style={{margin: '16 10', cursor: 'pointer'}} svgData={svgData} color={muiTheme.palette.alternateTextColor} hoverColor={muiTheme.palette.primary1Color} />
    )
  }
)

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
          <Nav>
            <MyPhotoAvatar src={require('../Images/myphoto.png')} size={48} />
            <NavLink to='/'>关于我</NavLink>
            <NavLink to='/'>文章</NavLink>
          </Nav>
          <ContactWrapper>
            <ContactIcon svgData={Svg.email} />
            <ContactIcon svgData={Svg.wechat} />
            <ContactIcon svgData={Svg.qq} />
          </ContactWrapper>
        </Wrapper>
      </Container>
    )
  }
}

export default muiThemeable()(Topbar)

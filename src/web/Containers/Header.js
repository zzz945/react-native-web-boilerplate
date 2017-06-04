import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'
import {FormattedMessage} from 'react-intl'

import {Link} from 'react-scroll'

import {HCenter, ContentContainer} from './CommonStyledComponents'
import Topbar from './Topbar'
import ViewMyWorkButton from './ViewMyWorkButton'

const Container = muiThemeable()(styled.div`
`)



const Background = muiThemeable()(styled(ContentContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 98vh;
  z-index: 1;
  background: ${props => props.muiTheme.palette.primary3Color};
`)

const Overlay = muiThemeable()(styled.div` 
  height: 100%;
  width: 100%;
  background: ${props => props.muiTheme.palette.textColor};
  opacity: ${props => props.opacity};
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`)

/*
const BackgroundBlur = styled.div`
  filter: blur(10px);
  z-index: -2;
  position: absolute;
  top: calc(640px/2 - 200px/2);
  left: calc(50% - 600px/2);
  width: 600px;
  height: 200px;
  background: url(${require('../Images/ipad-ui-design-1600-970.jpg')}) center;
` */

const Scroll = () => {
  return (
    <HCenter style={{zIndex: 1000, position: 'relative', height: 40, marginTop: -40}}>
      <Link style={{cursor: 'pointer'}} to='pageContent' smooth duration={500}><img style={{display: 'block'}} src={require('../Images/scroll.png')} alt='scroll' /></Link>
    </HCenter>
  )
}

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      windowHeight: 0,
      overlayOpacity: 0,
      titleOpacity: 1
    }
  }

  // fixed flinker
  round = (opacity) => {
    opacity = opacity < 0 ? 0 : opacity
    opacity = opacity > 1 ? 1 : opacity
    opacity = Math.round(opacity * 10) / 10
    return opacity
  }

  handleScroll = (e) => {
    let newOverlayOpacity = this.round(1.2 * window.scrollY / this.state.windowHeight)
    if (newOverlayOpacity !== this.state.overlayOpacity) {
      this.setState({overlayOpacity: newOverlayOpacity})
    }

    let newTitleOpacity = this.round(1 - window.scrollY / (this.state.windowHeight / 2.5))
    if (newTitleOpacity !== this.state.titleOpacity) {
      this.setState({titleOpacity: newTitleOpacity})
    }
  }

  updateWindowDimensions = (event) => {
    this.setState({ windowHeight: window.innerHeight })
  }

  componentDidMount () {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions)
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    return (
      <Container>
        <Topbar isTransparent={!(this.state.titleOpacity === 0)} />
        <Background>
          <div style={{zIndex: 1000}}>
            <p style={{opacity: this.state.titleOpacity, fontSize: 48, color: this.props.muiTheme.palette.alternateTextColor, margin: 0}}>
              <FormattedMessage id='header.title' />
            </p>
            <p style={{opacity: this.state.titleOpacity, fontSize: 14, color: this.props.muiTheme.palette.alternateTextColor, margin: '20px 0 28px 0'}}>
              <FormattedMessage id='header.description' />
            </p>
            <ViewMyWorkButton opacity={this.state.titleOpacity} />
          </div>
          <Overlay opacity={this.state.overlayOpacity} />
        </Background>
        <Scroll />
      </Container>
    )
  }
}

export default muiThemeable()(Header)

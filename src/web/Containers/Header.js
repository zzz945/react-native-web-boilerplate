import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'

import {Link} from 'react-scroll'

import {HCenter} from './CommonStyledComponents'
import Topbar from './Topbar'
import ViewMyWorkButton from './ViewMyWorkButton'

const Background = muiThemeable()(styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 98vh;
  padding: 0;
  z-index: 1;
  background: url(${require('../Images/ipad-ui-design-1600-970.jpg')}) no-repeat bottom center scroll;
  background-size: cover;
`)

const Overlay = muiThemeable()(styled.div` 
  height: 100%;
  width: 100%;
  background-color: #343333;
  opacity: ${props => props.opacity};
  z-index: 1;
  position: absolute;
  top: 0;
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

  handleScroll = (event) => {
    this.setState({overlayOpacity: 1.2 * window.scrollY / this.state.windowHeight})
    let tmp = 1 - window.scrollY / (this.state.windowHeight / 2.5)
    this.setState({titleOpacity: tmp > 0 ? tmp : 0})
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
      <div>
        <Topbar isTransparent={!(this.state.titleOpacity === 0)} />
        <Background>
          <div>
            <p style={{opacity: this.state.titleOpacity, fontSize: 48, color: this.props.muiTheme.palette.alternateTextColor, margin: 0}}>
              我是一名前端开发工程师&UX设计师
            </p>
            <p style={{opacity: this.state.titleOpacity, fontSize: 14, color: this.props.muiTheme.palette.alternateTextColor}}>
              用业界最佳实践做Web/App开发（React/React Native/Redux/响应式设计)
            </p>
            <ViewMyWorkButton opacity={this.state.titleOpacity} />
          </div>
          <Overlay opacity={this.state.overlayOpacity} />
        </Background>
        <Scroll />
      </div>
    )
  }
}

export default muiThemeable()(Header)

import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'
import {FormattedMessage} from 'react-intl'
import {Center, Link} from './CommonStyledComponents'

const Container = muiThemeable()(styled(Center)`
  position: relative;
  width: 200px;
  height: 60px;
  cursor: pointer;
  border: 2px solid ${props => props.muiTheme.palette.canvasColor};
  border-radius: 4px;
`)

const Background = muiThemeable()(styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.hover ? '200px' : 0};
  height: 60px;
  transition: .3s width ease-in;
  background: ${props => props.muiTheme.palette.canvasColor};
`)

class HireMeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  handleMouseEnter = () => {
    this.setState({hover: true})
  }

  handleMouseLeave = () => {
    this.setState({hover: false})
  }

  render () {
    let { hover } = this.state

    return (
      <Link style={{display: 'inline-block'}} href='https://github.com/zzz945/'>
        <Container style={{zIndex: 100, opacity: this.props.opacity}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <Background hover={hover} />
          <p style={{zIndex: 1000, color: hover ? this.props.muiTheme.palette.primary1Color : this.props.muiTheme.palette.alternateTextColor}}>
            <FormattedMessage id='header.works' />
          </p>
        </Container>
      </Link>
    )
  }
}

export default muiThemeable()(HireMeButton)

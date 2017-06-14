import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'
import {FormattedMessage} from 'react-intl'
import {Center, RLink} from './CommonStyledComponents'
import Svg from '../Images/Svg'

const Container = muiThemeable()(styled(Center)`
  position: relative;
  width: 300px;
  height: 100px;
  cursor: pointer;
  border: 2px solid ${props => props.muiTheme.palette.primary1Color};
  border-radius: 4px;
`)

const Background = muiThemeable()(styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.hover ? '300px' : 0};
  height: 100px;
  transition: .3s width ease-in;
  background: ${props => props.muiTheme.palette.primary1Color};
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
      <RLink to='/message'>
        <Container onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <Background hover={hover} />
          <div
            style={{
              zIndex: 100,
              color: hover ? this.props.muiTheme.palette.alternateTextColor : this.props.muiTheme.palette.textColor}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Svg.SvgCustomIcon
                svgData={Svg.pen}
                color={hover ? this.props.muiTheme.palette.alternateTextColor : this.props.muiTheme.palette.textColor} />
              <p
                style={{
                  fontWeight: 'bold',
                  lineHeight: 2,
                  fontSize: 24,
                  margin: '0 8px'}}>
                <FormattedMessage id='contact.button.title' />
              </p>
            </div>
            <p
              style={{
                textAlign: 'center',
                lineHeight: 2,
                fontSize: 12,
                margin: 0}}>
              <FormattedMessage id='contact.button.description' />
            </p>
          </div>
        </Container>
      </RLink>
    )
  }
}

export default muiThemeable()(HireMeButton)

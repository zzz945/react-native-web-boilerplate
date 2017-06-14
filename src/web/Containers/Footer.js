import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import Popover from 'material-ui/Popover'
import styled from 'styled-components'

import Svg from '../Images/Svg'
import {HCenter, Link} from './CommonStyledComponents'
import Images from '../Themes/Images'

const PopoverElWrapper = muiThemeable()(styled.div`
  border: 4px solid ${props => props.muiTheme.palette.primary1Color};
`)

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      wechatOpen: false,
      anchorEl: null
    }
  }

  handleWechatClick = (event) => {
    // This prevents ghost click.
    event.preventDefault()

    this.setState({
      wechatOpen: true,
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose = () => {
    this.setState({
      wechatOpen: false
    })
  }

  render () {
    return (
      <div
        style={{
          background: this.props.muiTheme.palette.textColor,
          color: this.props.muiTheme.palette.accent1Color,
          overflow: 'hidden',
          marginTop: 64,
          padding: 48}}>
        <HCenter>
          <div>
            <div
              onClick={this.handleWechatClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'}}>
              <Svg.SvgCustomIcon
                svgData={Svg.wechat}
                color={this.props.muiTheme.palette.accent1Color}
                hoverColor={this.props.muiTheme.palette.primary1Color} />
            </div>
            {this.state.anchorEl ? (
              <Popover
                open={this.state.wechatOpen}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
                onRequestClose={this.handleRequestClose}
                animated={false}
              >
                <PopoverElWrapper>
                  <img
                    style={{display: 'block'}}
                    src={Images.wechat}
                    width={360}
                    height={360}
                    alt='wechat' />
                </PopoverElWrapper>
              </Popover>
            ) : null}
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                marginLeft: 96}}>
              <Link href='mailto:18504211831@163.com'>
                <Svg.SvgCustomIcon
                  svgData={Svg.email}
                  color={this.props.muiTheme.palette.accent1Color}
                  hoverColor={this.props.muiTheme.palette.primary1Color} />
              </Link>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              marginLeft: 96}}>
            <Link href='https://github.com/zzz945'>
              <Svg.SvgCustomIcon
                svgData={Svg.github}
                color={this.props.muiTheme.palette.accent1Color}
                hoverColor={this.props.muiTheme.palette.primary1Color} />
            </Link>
          </div>
        </HCenter>
        <br />
        <p style={{textAlign: 'center', margin: 0, fontSize: 18}}>© Copyright 2017-2020. All rights reserved.</p>
      </div>
    )
  }
}

export default muiThemeable()(Footer)

import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import SwipeableViews from 'react-swipeable-views'
import styled from 'styled-components'
import {FormattedMessage} from 'react-intl'
import {HCenter, Center, ContentLight, Link, ContentContainer} from './CommonStyledComponents'
import Pagination from '../Components/SwipperPagination/Pagination'

const Swiper = styled(SwipeableViews)`
  width: 800px;
  @media (max-width: 840px) {
    width: 100%;
  }
`

const ArrowWrapper = muiThemeable()(styled.div`
  width: 700px;
  @media (max-width: 840px) {
    width: 90%;
  }
  z-index: 1000;
  position: absolute;
  top: 61%;
  display: flex;
  justify-content: space-between;
`)

class Swipper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  goLeft = () => {
    if (this.state.index === 0) {
      this.setState({index: 1})
    } else {
      this.setState({index: 0})
    }
  }

  goRight = () => {
    if (this.state.index === 0) {
      this.setState({index: 1})
    } else {
      this.setState({index: 0})
    }
  }

  handleChangeIndex = (index) => {
    this.setState({index: index})
  }

  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', background: this.props.muiTheme.palette.primary3Color}}>
        <ArrowWrapper>
          <a style={{visibility: this.state.index === 0 ? 'hidden' : 'visible', cursor: 'pointer'}} onClick={this.goLeft}><img style={{display: 'block'}} src={require('../Images/left-arrow.png')} alt='left-arrow' /></a>
          <a style={{visibility: this.state.index === 1 ? 'hidden' : 'visible', cursor: 'pointer'}} onClick={this.goRight}><img style={{display: 'block'}} src={require('../Images/right-arrow.png')} alt='left-arrow' /></a>
        </ArrowWrapper>
        <p style={{fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 80, marginBottom: 20}}><FormattedMessage id='bestpractice.title1' /></p>
        <p style={{fontSize: 24, color: this.props.muiTheme.palette.alternateTextColor, marginTop: 0, marginBottom: 20}}><FormattedMessage id='bestpractice.title2' /></p>
        <Swiper containerStyle={{width: '100%'}} index={this.state.index} springConfig={{duration: '0.8s', easeFunction: 'ease-out', delay: '0s'}}>
          <Center style={{padding: this.props.muiTheme.padding}}>
            <div>
              <ContentLight style={{color: this.props.muiTheme.palette.alternateSecondaryTextColor}}>
                <span style={{fontSize: 32}}><FormattedMessage id='bestpractice.design.title' /></span> <FormattedMessage id='bestpractice.design.content' values={{link1: <Link href='http://goodui.org'>goodui</Link>, link2: <Link href='https://www.uxpin.com/studio/ebooks/'>uxpin</Link>}} />
              </ContentLight>
              <br /><br />
              <HCenter>
                <img style={{width: '100%'}} src={require('../Images/slider2.jpg')} alt='slider2' />
              </HCenter>
              <br /><br />
            </div>
          </Center>
          <Center style={{padding: this.props.muiTheme.padding}}>
            <div>
              <ContentLight style={{color: this.props.muiTheme.palette.alternateSecondaryTextColor}}>
                <span style={{fontSize: 32}}><FormattedMessage id='bestpractice.develop.title' /></span> <FormattedMessage id='bestpractice.develop.content' values={{link: <Link href='https://github.com/zzz945/react-native-web-boilerplate'>react-native-web-boilerplate</Link>}} />
              </ContentLight>
              <br />
              <HCenter>
                <img style={{width: '100%'}} src={require('../Images/slider1.jpg')} alt='slider1' />
              </HCenter>
              <br />
            </div>
          </Center>
        </Swiper>
        <Pagination
          dots={2}
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
        />
        <br />
      </div>
    )
  }
}

export default muiThemeable()(Swipper)

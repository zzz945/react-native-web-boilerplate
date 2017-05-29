import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import SwipeableViews from 'react-swipeable-views'
import {HCenter, Center, ContentLight, Link} from './CommonStyledComponents'
import Pagination from '../Components/SwipperPagination/Pagination'

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
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', background: '#454c53'}}>
        <div style={{zIndex: 1000, position: 'absolute', top: '61%', width: 880, display: 'flex', justifyContent: 'space-between'}}>
          <a style={{visibility: this.state.index === 0 ? 'hidden' : 'visible', cursor: 'pointer'}} onClick={this.goLeft}><img style={{display: 'block'}} src={require('../Images/left-arrow.png')} alt='left-arrow' /></a>
          <a style={{visibility: this.state.index === 1 ? 'hidden' : 'visible', cursor: 'pointer'}} onClick={this.goRight}><img style={{display: 'block'}} src={require('../Images/right-arrow.png')} alt='left-arrow' /></a>
        </div>
        <p style={{fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 80, marginBottom: 20}}>设计&开发</p>
        <p style={{fontSize: 24, color: this.props.muiTheme.palette.alternateTextColor, marginTop: 0, marginBottom: 20}}>最佳实践</p>
        <SwipeableViews index={this.state.index} springConfig={{duration: '0.8s', easeFunction: 'ease-out', delay: '0s'}} style={{width: 960}}>
          <Center>
            <div>
              <ContentLight style={{textAlign: 'left', color: this.props.muiTheme.palette.alternateSecondaryTextColor}}>
                <span style={{fontSize: 32}}>UX设计</span> 对于我来说与艺术关系不大，更重要的是严谨的逻辑思维和设计模式。平时多看好的设计，多思考好的设计背后的原因，然后把别人的东西变成自己的东西。参考好的设计并不等于抄袭，业界成熟的设计模式符合用户的使用习惯，合理参考运用可以减少用户对于产品的学习难度。但是，把别人的东西拿来用的同时，需要弄明白其中的设计理念，界面上每个元素都有其存在的意义，而且还需要与整体设计风格一致，生搬硬套是行不通的。站在巨人肩膀才能看得更远，已经有人对UX设计模式有很全面的总结，感谢<Link href='http://goodui.org'>goodui</Link>和<Link href='https://www.uxpin.com/studio/ebooks/'>uxpin</Link>。
              </ContentLight>
              <br /><br />
              <HCenter>
                <img width={650} height={250} src={require('../Images/slider2.jpg')} alt='slider2' />
              </HCenter>
              <br /><br />
            </div>
          </Center>
          <Center>
            <div>
              <ContentLight style={{textAlign: 'left', color: this.props.muiTheme.palette.alternateSecondaryTextColor}}>
                <span style={{fontSize: 32}}>编程</span> 是我最擅长的领域。感谢React提高了Web开发的代码复用率，感谢React Native把强大Javascript生态圈和最流行的Css带进了App开发，明显提高了项目开发的效率。以往开发一个Web／App项目，一个人是很难完成的，Ios原生开发、Android原生开发和Web开发完全是不同的开发环境、不同的语言、Api和框架，学习成本太高而一个人的精力是有限的。而现在用React／React Native, 语言只需精通js／css，“Learn once，write anywhere”。不仅统一了开发语言，Web和App开发中很多业务逻辑代码都可以共用，开发维护的体验非常棒，节约了很多精力。我在学习和实践中也总结了一套React Web／React Native开发的最佳实践，并在Github上开源了<Link href='https://github.com/zzz945/react-native-web-boilerplate'>react-native-web-boilerplate</Link>工程。
              </ContentLight>
              <br />
              <HCenter>
                <img width={650} height={250} src={require('../Images/slider1.jpg')} alt='slider1' />
              </HCenter>
              <br />
            </div>
          </Center>
        </SwipeableViews>
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

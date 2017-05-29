import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'
import Avatar from 'material-ui/Avatar'
import {Element} from 'react-scroll'

import {HCenter, Center, TitleDark, TitleLight, SubTitleDark, SubTitleLight, ContentDark, ContentLight} from './CommonStyledComponents'
import Header from './Header'
import Swipper from './Swipper'
import Footer from './Footer'
import HireMeButton from './HireMeButton'

const Container = styled.div`
`

class AboutMe extends Component {
  render () {
    return (
      <Container>
        <Header />
        <Element name='pageContent'>
          <div id='Content' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: this.props.muiTheme.sectionHeight, padding: 60, boxSizing: 'border-box', background: `linear-gradient(to bottom, white 50%, ${this.props.muiTheme.palette.secondaryTextColor} 50%)`}}>
            <Center style={{flex: 1}}>
              <div>
                <p style={{fontSize: 14, color: '#d7d7d7'}}>WELCOME TO</p>
                <p style={{fontSize: 24, color: this.props.muiTheme.palette.secondaryTextColor, margin: 0}}>我的地盘</p>
              </div>
            </Center>
            <Avatar
              src={require('../Images/me.jpg')}
              size={120}
              backgroundColor={'white'}
              style={{border: '2px solid white', margin: 32}}
            />
            <Center style={{flex: 1}}>
              <div style={{width: 800}}>
                <SubTitleLight>我是张岱岩</SubTitleLight>
                <ContentLight>
                  我对设计和开发有很大的热情。我喜欢探索新技术，喜欢自学新知识。我擅长多平台响应式Web和App设计和开发，能够权衡各平台的程序复用以及个性化需求，追求最佳的设计和开发实践。我的人生观念是不断学习，我的事业方向是终身从事设计和开发，用工匠精神打造极致的产品体验。
                </ContentLight>
              </div>
            </Center>
          </div>
          <Center style={{display: 'flex', alignItems: 'center', background: `linear-gradient(to left, white 50%, ${this.props.muiTheme.palette.primary1Color} 50%)`}}>
            <Center style={{flex: 1}}>
              <TitleLight>技术能力</TitleLight>
            </Center>
            <Center style={{flex: 1}}>
              <div style={{margin: 64}}>
                <br />
                <SubTitleDark>多平台响应式Web和App设计和开发</SubTitleDark>
                <br /><br />
                <HCenter>
                  <img src={require('../Images/phones.png')} width={400} alt='phones' />
                </HCenter>
                <br /><br />
                <ContentDark>敲定需求－UX草图－响应式Sketch UI设计－React Web程序开发－React Native ANDROID／IOS app开发－快速迭代</ContentDark>
              </div>
            </Center>
          </Center>
          <Swipper />
          <HCenter>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: 800, padding: 10}}>
              <br /><br /><br />
              <TitleDark>为您工作</TitleDark>
              <ContentDark>
                我现在是自由职业者，目前有足够的空闲时间，接受项目外包、兼职和远程的工作机会，如果有合适的全职工作，我也考虑到您的公司入职。同时欢迎有需要的朋友与我联系，欢迎想讨论设计和开发的朋友联系我，我们互相学习。
              </ContentDark>
              <br /><br />
              <HireMeButton />
            </div>
          </HCenter>
        </Element>
        <Footer />
      </Container>
    )
  }
}

export default muiThemeable()(AboutMe)

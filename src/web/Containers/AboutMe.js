import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'
import Avatar from 'material-ui/Avatar'
import {Element} from 'react-scroll'
import {FormattedMessage} from 'react-intl'

import {HCenter, Center, TitleDark, TitleLight, SubTitleDark, SubTitleLight, ContentDark, ContentLight, ContentContainer} from './CommonStyledComponents'
import Header from './Header'
import Swipper from './Swipper'
import Footer from './Footer'
import HireMeButton from './HireMeButton'

const Container = styled.div`
`

const Ability = muiThemeable()(styled.section`
  display: flex;
  height: ${props => props.muiTheme.sectionHeight}px;
  @media (max-width: 600px) {
    display: block;
    height: auto;
  }
`)

const AbilityTitleWrapper = muiThemeable()(styled(Center)`
  flex: 1;
  background: ${props => props.muiTheme.palette.primary1Color};
  @media (max-width: 600px) {
    height: ${props => props.muiTheme.sectionHeight / 2 + 'px'};
  }
`)

const AbilityContentWrapper = muiThemeable()(styled(Center)`
  flex: 1;
  background: ${props => props.muiTheme.palette.canvasColor};
  @media (max-width: 600px) {
    height: ${props => props.muiTheme.sectionHeight + 'px'};
  }
`)

class AboutMe extends Component {
  render () {
    const visitCount = window.__VISIT_COUNT__
    return (
      <Container>
        <Header />
        <Element name='pageContent'>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: this.props.muiTheme.sectionHeight, padding: `60px ${this.props.muiTheme.padding}px`, boxSizing: 'border-box', background: `linear-gradient(to bottom, white 50%, ${this.props.muiTheme.palette.primary3Color} 50%)`}}>
            <Center style={{flex: 1}}>
              <TitleDark>
                <FormattedMessage
                  id='introduction.title'
                  values={{
                    count: <span style={{color: this.props.muiTheme.palette.primary1Color}}>{visitCount}</span>
                  }} />
              </TitleDark>
            </Center>
            <Avatar
              src={require('../Images/me.jpg')}
              size={120}
              backgroundColor={'white'}
              style={{border: '2px solid white'}}
            />
            <Center style={{flex: 1}}>
              <div style={{maxWidth: 800}}>
                <SubTitleLight>
                  <FormattedMessage id='introduction.whoami' />
                </SubTitleLight>
                <ContentLight>
                  <FormattedMessage id='introduction.description' />
                </ContentLight>
              </div>
            </Center>
          </div>
          <Ability>
            <AbilityTitleWrapper>
              <TitleLight><FormattedMessage id='skills.title' /></TitleLight>
            </AbilityTitleWrapper>
            <AbilityContentWrapper>
              <ContentContainer>
                <SubTitleDark><FormattedMessage id='skills.subtitle' /></SubTitleDark>
                <Center style={{marginTop: 120}}>
                  <img src={require('../Images/phones.png')} style={{width: '90%'}} alt='phones' />
                </Center>
                <ContentDark style={{marginTop: 60}}><FormattedMessage id='skills.content' /></ContentDark>
              </ContentContainer>
            </AbilityContentWrapper>
          </Ability>
          <Swipper />
          <HCenter>
            <ContentContainer style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 800}}>
              <br /><br /><br />
              <TitleDark><FormattedMessage id='contact.title' /></TitleDark>
              <ContentDark>
                <FormattedMessage id='contact.description' />
              </ContentDark>
              <br /><br />
              <HireMeButton />
            </ContentContainer>
          </HCenter>
        </Element>
        <Footer />
      </Container>
    )
  }
}

export default muiThemeable()(AboutMe)

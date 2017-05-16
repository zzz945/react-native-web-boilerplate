import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'

import Svg from '../Images/Svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = muiThemeable()(styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 640px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.muiTheme.palette.primary2Color};
  background-image: url(${require('../Images/header1280.png')});
  background-blend-mode: overlay;
`)

const HeaderTitle = muiThemeable()(styled.h2`
  text-align: center;
  color: ${props => props.muiTheme.palette.alternateTextColor};
`)

const IndicatorWrapper = muiThemeable()(styled.div`
  position: absolute;
  top: 614px;
  left: 80%;
  border: 4px solid white;
  padding: 8px;
  background-color: ${props => props.muiTheme.palette.accent1Color};
`)

const Indicator = muiThemeable()(
  ({style, muiTheme}) => {
    return (
      <IndicatorWrapper>
        <Svg.SvgCustomIcon svgData={Svg.arrowDown} color={muiTheme.palette.alternateTextColor} />
      </IndicatorWrapper>
    )
  }
)

const Label = muiThemeable()(styled.div`
  flex: 1;
  border-radius: 12px;
  padding: 4px 8px;
  margin: 0 8px;
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  cursor: pointer;
  color: ${props => props.muiTheme.palette.alternateTextColor};
  background-color: ${props => props.muiTheme.palette.primary1Color};
  &:hover {  
    color: ${props => props.muiTheme.palette.primary1Color};
    background-color: ${props => props.muiTheme.palette.canvasColor};
  }
`)

const LabelGroup = styled.div`
  display: flex;
  justify-content: center;
`

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
        <Header>
          <HeaderTitle>我是张岱岩, 一名全栈设计师</HeaderTitle>
          <LabelGroup>
            <Label>React</Label>
            <Label>React Native</Label>
            <Label>Redux</Label>
            <Label>Responsive Design</Label>
            <Label>UX Desigin Pattern</Label>
            <Label>SSOT</Label>
            <Label>Hapi</Label>
            <Label>REST FULL</Label>
          </LabelGroup>
        </Header>
        <Indicator />
      </Container>
    )
  }
}

export default muiThemeable()(Topbar)

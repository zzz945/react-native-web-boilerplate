import styled from 'styled-components'
import muiThemeable from 'material-ui/styles/muiThemeable'

export const HCenter = styled.div`
  display: flex;
  justify-content: center;
`

export const VCenter = styled.div`
  display: flex;
  align-items: center;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleDark = muiThemeable()(styled.h1`
  text-align: center;
  color: ${props => props.muiTheme.palette.textColor};
  font-size: 48px;
  font-weight: 'bold';
`)

export const TitleLight = muiThemeable()(styled(TitleDark)`
  color: ${props => props.muiTheme.palette.alternateTextColor};
`)

export const SubTitleDark = muiThemeable()(styled.h3`
  text-align: center;
  color: ${props => props.muiTheme.palette.textColor};
  font-size: 20px;
  font-weight: 'bold';
`)

export const SubTitleLight = muiThemeable()(styled(SubTitleDark)`
  color: ${props => props.muiTheme.palette.alternateTextColor};
`)

export const ContentDark = muiThemeable()(styled.p`
  font-size: 14px;
  letter-spacing: 0.1em;
  line-height: 2em;
  color: ${props => props.muiTheme.palette.secondaryTextColor};
`)

export const ContentLight = muiThemeable()(styled(ContentDark)`
  color: ${props => props.muiTheme.palette.alternateTextColor};
`)

export const Link = muiThemeable()(styled.a`
  text-decoration: none;
  color: ${props => props.muiTheme.palette.primary2Color};
`)

export const ContentContainer = muiThemeable()(styled.div`
  padding: ${props => props.muiTheme.padding}px;
  box-sizing: border-box;
`)

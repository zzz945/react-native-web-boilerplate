import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  sectionTop: {
    ...ApplicationStyles.centered,
    padding: Metrics.baseMargin
  },
  sectionBottom: {
    padding: Metrics.baseMargin,
    ...ApplicationStyles.centered,
    backgroundColor: Colors.primary1Color
  },
  sectionTitle: {
    ...ApplicationStyles.sectionTitle,
    color: Colors.alternateTextColor
  },
  sectionText: {
    ...ApplicationStyles.sectionText,
    color: Colors.alternateSecondaryTextColor
  },
  title: {
    ...ApplicationStyles.titleText
  },
  button: {

  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  }
})

import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles, Metrics } from '../../Themes'

export const borderColor = Colors.primary2Color
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 24,
    backgroundColor: 'white'
  },
  titleWrapper: {
    ...ApplicationStyles.centered
  },
  title: {
    ...ApplicationStyles.titleText
  },
  description: {
    ...ApplicationStyles.subtitle
  },
  form: {
    flex: 1
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  label: {
    color: Colors.primary2Color
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  modalText: {
    ...ApplicationStyles.sectionText,
    margin: Metrics.doubleBaseMargin
  },
  modalButtonContainer: {
    width: '100%'
  }
})

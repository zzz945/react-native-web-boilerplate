import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  container: {
    flex: 1,
    padding: Metrics.baseMargin,
    backgroundColor: Colors.transparent
  },
  section: {
    margin: Metrics.section,
    padding: Metrics.doubleBaseMargin
  },
  sectionTitle: {
    ...Fonts.style.h3,
    color: Colors.textColor,
    textAlign: 'center'
  },
  sectionText: {
    ...Fonts.style.normal,
    color: Colors.secondaryTextColor,
    textAlign: 'center'
  },
  subtitle: {
    ...Fonts.style.h6,
    color: Colors.textColor
  },
  titleText: {
    ...Fonts.style.h2,
    color: Colors.textColor,
    textAlign: 'center'
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default ApplicationStyles

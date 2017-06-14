import Platform from './src/shared/Lib/Platform'
import './src/native/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'

Platform.os = 'android'
AppRegistry.registerComponent('IgniteBoilerplate', () => require('./src/native/Containers/App').default)

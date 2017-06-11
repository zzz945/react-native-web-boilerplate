import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    login: require('../../shared/Redux/LoginRedux').reducer,
    visit: require('./VisitRedux').reducer,
    message: require('../../shared/Redux/MessageRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../../shared/Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    login: require('../../shared/Redux/LoginRedux').reducer,
    search: require('../../shared/Redux/SearchRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}

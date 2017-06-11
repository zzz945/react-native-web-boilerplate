import { takeLatest } from 'redux-saga/effects'
import API from '../../shared/Services/Api'
import FixtureAPI from '../../shared/Services/FixtureApi'
import DebugConfig from '../../shared/Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../../shared/Redux/StartupRedux'
import { LoginTypes } from '../../shared/Redux/LoginRedux'
import { VisitTypes } from '../Redux/VisitRedux'
import { MessageTypes } from '../../shared/Redux/MessageRedux'

/* ------------- Sagas ------------- */

import { startup } from '../../shared/Sagas/StartupSagas'
import { login } from '../../shared/Sagas/LoginSagas'
import { visit } from './VisitSagas'
import { message } from '../../shared/Sagas/MessageSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(VisitTypes.VISIT_REQUEST, visit, api),
    takeLatest(MessageTypes.MESSAGE_POST, message, api)
  ]
}

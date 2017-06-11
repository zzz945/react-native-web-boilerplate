import { call, put } from 'redux-saga/effects'
import { MessageTypes } from '../Redux/MessageRedux'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function * message (api, action) {
  try {
    const {ok, problem} = yield call(api.sendMessage, action.message)
    if (ok) yield put({type: MessageTypes.MESSAGE_SUCCESS})
    else yield put({type: MessageTypes.MESSAGE_FAILURE, error: problem})
  } catch (e) {
    yield put({type: MessageTypes.MESSAGE_FAILURE, error: e.message})
  }
}

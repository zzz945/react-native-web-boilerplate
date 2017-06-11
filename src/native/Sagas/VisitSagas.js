import { call, put } from 'redux-saga/effects'
import { VisitTypes } from '../Redux/VisitRedux'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function * visit (api, action) {
  try {
    const {data, ok, problem} = yield call(api.getVisit)
    if (ok) yield put({type: VisitTypes.VISIT_SUCCESS, visit: data})
    else yield put({type: VisitTypes.VISIT_FAILURE, error: problem})
  } catch (e) {
    yield put({type: VisitTypes.VISIT_FAILURE, error: e.message})
  }
}

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  visitRequest: null,
  visitSuccess: ['visit'],
  visitFailure: ['error']
})

export const VisitTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  visit: 0,
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to login
export const request = (state) => state.merge({ fetching: true })

// we've successfully logged in
export const success = (state, { visit }) =>
  state.merge({ fetching: false, error: null, visit })

// we've had a problem logging in
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.VISIT_REQUEST]: request,
  [Types.VISIT_SUCCESS]: success,
  [Types.VISIT_FAILURE]: failure
})

/* ------------- Selectors ------------- */


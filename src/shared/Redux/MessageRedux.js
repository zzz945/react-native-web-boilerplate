import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  messagePost: ['message'],
  messageSuccess: null,
  messageFailure: ['error']
})

export const MessageTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  error: null,
  sending: false
})

/* ------------- Reducers ------------- */

// we're attempting to login
export const post = (state) => state.merge({ sending: true })

// we've successfully logged in
export const success = (state) =>
  state.merge({ sending: false, error: null })

// we've had a problem logging in
export const failure = (state, { error }) =>
  state.merge({ sending: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MESSAGE_POST]: post,
  [Types.MESSAGE_SUCCESS]: success,
  [Types.MESSAGE_FAILURE]: failure
})

/* ------------- Selectors ------------- */
export const getMessage = (state) => state.message.message

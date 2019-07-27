import {createStore, compose, applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './index'
import rootEpic from '../epics'

const configureStore = ({initialState, profile}) => {
  const production = process.env.NODE_ENV === 'production'
  let middlewares = [createEpicMiddleware(rootEpic)]

  if (!production) {
    middlewares = [reduxImmutableStateInvariant(), ...middlewares]
  }

  return createStore(
    rootReducer,
    initialState,
    production
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares))
  )
}

export default configureStore

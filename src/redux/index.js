import {combineReducers} from 'redux'

import background from './backgroundReducer'
import logo from './logoReducer'

export default combineReducers({
  background,
  logo,
})

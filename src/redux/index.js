import {combineReducers} from 'redux'

import background from './backgroundReducer'
import logo from './logoReducer'
import text from './textReducer'
import {localstorage} from './localStorageHoR'
import {undoRedo} from './undoRedoHoR'

export default localstorage(
  'promo-app-state',
  undoRedo(
    combineReducers({
      background,
      logo,
      text,
    })
  )
)

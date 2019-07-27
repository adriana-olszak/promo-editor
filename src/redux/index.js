import {combineReducers} from 'redux'

import background from './backgroundReducer'
import logo from './logoReducer'
import text from './textReducer'
import {localstorageMeta} from './localStorageHoR'
import {undoRedo} from './undoRedoHoR'

export default localstorageMeta(
  'promo-app-state',
  undoRedo(
    combineReducers({
      background,
      logo,
      text,
    })
  )
)

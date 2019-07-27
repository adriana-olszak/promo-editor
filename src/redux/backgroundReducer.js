import {BACKGROUND_REMOVED, BACKGROUND_SELECTED} from './actions'

const background = (state = {}, action) => {
  switch (action.type) {
    case BACKGROUND_SELECTED:
      return {}
    case BACKGROUND_REMOVED:
      return {}
    default:
      return state
  }
}

export default background

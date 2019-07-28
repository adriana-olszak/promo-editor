import {LOGO_DROPPED, LOGO_MOVED, LOGO_REMOVED, LOGO_RESIZED} from './actions'

const logoReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGO_REMOVED:
      return Object.fromEntries(
        Object.entries(state).filter(([key]) => key !== action.id)
      )
    case LOGO_RESIZED:
    case LOGO_MOVED:
    case LOGO_DROPPED: {
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          width: action.width,
          height: action.height,
          top: action.top,
          left: action.left,
        },
      }
    }
    default:
      return state
  }
}

export default logoReducer

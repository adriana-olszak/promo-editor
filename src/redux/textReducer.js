import {TEXT_ADDED, TEXT_MOVED, TEXT_REMOVED} from './actions'

const textReducer = (state = {}, action) => {
  switch (action.type) {
    case TEXT_REMOVED:
      return Object.fromEntries(
        Object.entries(state).filter(([key]) => key !== action.id)
      )
    case TEXT_MOVED: {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          top: action.top,
          left: action.left,
        },
      }
    }
    case TEXT_ADDED: {
      return {
        ...state,
        [action.id]: {
          id: action.id,
          text: action.text,
          color: action.color,
          fontFamily: action.fontFamily,
          textDecoration: action.textDecoration,
          type: 'TEXT',
          top: action.top || 0,
          left: action.left || 0,
        },
      }
    }
    default:
      return state
  }
}

export default textReducer

import {RESET_STORE} from './actions'

export const loadState = key => {
  try {
    const serializedState = localStorage.getItem(`${key}`)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export function localstorageMeta(key, reducer) {
  return function(state, action) {
    let nextState = reducer(state, action)

    // TODO: should I add here an condition to hanlde only few actions??
    // this solution is not optimized for performance
    let storageState = loadState(key)
    if (action.type === RESET_STORE) {
      localStorage.removeItem(key)
    } else if ((!state && storageState) || action.type === '@@redux/INIT') {
      nextState = storageState
    } else {
      localStorage.setItem(key, JSON.stringify(nextState))
    }
    return nextState
  }
}

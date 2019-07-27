import {combineEpics} from 'redux-observable'

import background from './background'

export default combineEpics(background)

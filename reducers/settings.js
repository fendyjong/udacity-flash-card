import { SETTINGS_UPDATE } from '../actions'
import { createReducer } from './utils'

const initialState = {
  dailyNotification: false,
}

const handlers = {
  [SETTINGS_UPDATE]: (state, action) => ({
    ...state,
    ...action.settings,
  }),
}

export default createReducer(initialState, handlers)

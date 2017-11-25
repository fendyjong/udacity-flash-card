import { combineReducers } from 'redux'

import decks from './decks'
import deck from './deck'
import quiz from './quiz'
import settings from './settings'

export default combineReducers({
  decks,
  deck,
  quiz,
  settings,
})

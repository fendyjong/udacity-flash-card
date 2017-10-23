import { DECK_LIST, DECK_ADD, DECK_DELETE } from '../actions'
import { createReducer } from './utils'

const initialState = {}

const handlers = {
  [DECK_LIST]: (state, action) => state,
  [DECK_ADD]: (state, action) => state,
  [DECK_DELETE]: (state, action) => state,
}

export default createReducer(initialState, handlers)

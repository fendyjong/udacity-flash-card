import { CARD_LIST, CARD_ADD, CARD_DELETE } from '../actions'
import { createReducer } from './utils'

const initialState = {}

const handlers = {
  [CARD_LIST]: (state, action) => state,
  [CARD_ADD]: (state, action) => state,
  [CARD_DELETE]: (state, action) => state,
}

export default createReducer(initialState, handlers)

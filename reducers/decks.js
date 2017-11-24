import { DECK_LIST, DECK_SELECT } from '../actions'
import { createReducer } from './utils'

const initialState = {
  list: {},
  deck: {
    key: '',
    title: '',
    questions: [],
  },
}

const handlers = {
  [DECK_LIST]: (state, action) => ({
    ...state,
    list: action.list || {},
  }),
  [DECK_SELECT]: (state, action) => ({
    ...state,
    selectedDeckKey: action.key,
  }),
}

export default createReducer(initialState, handlers)

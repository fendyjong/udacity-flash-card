import { DECK_SELECT } from '../actions'
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
  [DECK_SELECT]: (state, action) => ({
    ...state,
    selectedDeckKey: action.key,
  }),
}

export default createReducer(initialState, handlers)

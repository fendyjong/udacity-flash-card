import { DECK_SELECT, DECK_ADD, CARD_ADD } from '../actions'
import { createReducer } from './utils'

const initialState = {
  key: null,
  title: '',
  question: [],
}

const handlers = {
  [DECK_SELECT]: (state, action) => ({
    key: action.key,
    ...action.deck,
  }),
  [DECK_ADD]: (state, action) => {
    const { title, questions } = action
    const key = title.replace(/\s/g, '')

    return {
      key,
      title,
      questions,
    }
  },
}

export default createReducer(initialState, handlers)

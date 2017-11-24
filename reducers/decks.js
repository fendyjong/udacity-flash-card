import { DECK_LIST, DECK_ADD, CARD_ADD } from '../actions'
import { createReducer } from './utils'

const initialState = {}

const handlers = {
  [DECK_LIST]: (state, action) => {
    const list = {}
    Object.keys(action.decks).map(key => list[key] = { ...action.decks[key], key })

    return list
  },
  [DECK_ADD]: (state, action) => {
    const { key, title, questions } = action

    return {
      ...state,
      [key]: {
        key,
        title,
        questions,
      },
    }
  },

  [CARD_ADD]: (state, action) => {
    const { deckKey, question, answer } = action

    const deck = state[deckKey]
    deck.questions.push({ question, answer })

    return {
      ...state,
      [deckKey]: deck,
    }
  },
}

export default createReducer(initialState, handlers)

import { DECK_LIST, CARD_ADD } from '../actions'
import { createReducer } from './utils'

const initialState = {}

const handlers = {
  /**
   * Store deck list
   *
   * @param state
   * @param action
   * @returns {{}}
   */
  [DECK_LIST]: (state, action) => {
    const list = {}
    Object.keys(action.decks).map(key => list[key] = { ...action.decks[key], key })

    return list
  },
  /**
   * Store new card to deck
   *
   * @param state
   * @param action
   * @returns {{}}
   */
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

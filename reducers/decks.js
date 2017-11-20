import {
  DECK_ADD, DECK_DELETE, DECK_SELECT,
  CARD_ADD,
} from '../actions'
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
  [DECK_ADD]: (state, action) => {
    const { title } = action
    const key = title.replace(/\s/g, '')

    return {
      ...state,
      list: {
        ...state.list,
        [key]: {
          title,
          questions: [],
        },
      },
    }
  },
  [DECK_DELETE]: (state, action) => state,
  [DECK_SELECT]: (state, action) => {
    const { key } = action
    const deck = {
      ...state.list[key],
      key,
    }

    return {
      ...state,
      deck,
    }
  },

  [CARD_ADD]: (state, action) => {
    const { deck, question, answer } = action

    return {
      ...state,
      list: {
        ...state.list,
        [deck.key]: {
          ...deck,

        },
      },
    }
  },
}

export default createReducer(initialState, handlers)

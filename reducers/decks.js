<<<<<<< HEAD
import { DECK_LIST, DECK_SELECT } from '../actions'
=======
import {
  DECK_ADD, DECK_DELETE, DECK_SELECT,
  CARD_ADD,
} from '../actions'
>>>>>>> parent of 1150130... asyncstorage
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
<<<<<<< HEAD
  [DECK_LIST]: (state, action) => ({
    ...state,
    list: action.list || {},
  }),
  [DECK_SELECT]: (state, action) => ({
    ...state,
    selectedDeckKey: action.key,
  }),
=======
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
>>>>>>> parent of 1150130... asyncstorage
}

export default createReducer(initialState, handlers)

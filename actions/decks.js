import { DECK_LIST, DECK_ADD, DECK_DELETE } from './index'

export const deckList = ({ decks }) => ({
  type: DECK_LIST,
  ...decks,
})

export const deckAdd = ({ form }) => ({
  type: DECK_ADD,
  ...form,
})

export const deckDelete = ({ id }) => ({
  type: DECK_DELETE,
  id,
})

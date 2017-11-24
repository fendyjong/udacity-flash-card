import { DECK_ADD, DECK_DELETE, DECK_LIST, DECK_SELECT } from './index'

export const deckList = _ => ({
  type: DECK_LIST,
})

export const deckAdd = form => ({
  type: DECK_ADD,
  ...form,
})

export const deckSelect = key => ({
  type: DECK_SELECT,
  key,
})

export const deckDelete = ({ id }) => ({
  type: DECK_DELETE,
  id,
})

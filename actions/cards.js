import { CARD_LIST, CARD_ADD, CARD_DELETE } from './index'

export const cardList = ({ cards }) => ({
  type: CARD_LIST,
  ...cards,
})

export const cardAdd = form => ({
  type: CARD_ADD,
  ...form,
})

export const cardDelete = ({ id }) => ({
  type: CARD_DELETE,
  id,
})

import { DECK_ADD, DECK_LIST, CARD_ADD } from './index'

export const decksList = decks => ({
  type: DECK_LIST,
  decks,
})

export const deckAdd = ({ title, questions }) => ({
  type: DECK_ADD,
  title,
  questions,
})

export const cardAdd = ({ deckKey, question, answer }) => ({
  type: CARD_ADD,
  deckKey,
  question,
  answer,
})
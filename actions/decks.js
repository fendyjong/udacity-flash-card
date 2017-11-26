import { DECK_LIST, CARD_ADD } from './index'

/**
 * Populate redux with decks list
 *
 * @param decks
 */
export const decksList = decks => ({
  type: DECK_LIST,
  decks,
})

export const cardAdd = ({ deckKey, question, answer }) => ({
  type: CARD_ADD,
  deckKey,
  question,
  answer,
})
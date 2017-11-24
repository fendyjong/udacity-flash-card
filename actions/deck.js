import { DECK_SELECT, CARD_ADD } from './index'

export const deckSelect = ({ key, deck }) => ({
  type: DECK_SELECT,
  key,
  deck,
})

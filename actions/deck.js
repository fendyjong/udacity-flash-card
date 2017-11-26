import { DECK_SELECT } from './index'

/**
 * Set redux data when a deck is selected
 *
 * @param key
 * @param deck
 */
export const deckSelect = ({ key, deck }) => ({
  type: DECK_SELECT,
  key,
  deck,
})

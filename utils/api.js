import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'DECK_STORAGE'
const SETTINGS_KEY = 'SETTINGS'

export async function fetchDecks() {
  try {
    const decks = await AsyncStorage.getItem(STORAGE_KEY, (error, result) => {
      if (result) {
        return result
      }
      return '{}'
    })

    return JSON.parse(decks)
  } catch (e) {
    console.log(e)
    return {}
  }
}

/**
 * Render Decks list into FlatList array
 * @returns {Promise.<Array>}
 */
export async function flatListDecks() {
  const result = await fetchDecks()
  // render list to array for FlatList
  const list = []
  Object.keys(result).map(key => list.push({ ...result[key], key }))

  return list
}

/**
 * Fetch single deck
 *
 * @param key
 * @returns {Promise.<*>}
 */
export async function fetchDeck(key) {
  const decks = await fetchDecks()
  if (decks) {
    return decks[key]
  }
  return {}
}

/**
 * Save Decks data
 *
 * @param title
 */
export function addDeck({ title }) {
  const key = title.replace(/\s/g, '')

  AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [key]: {
      title,
      questions: [],
    },
  }))
}

export async function removeDeck({ key }) {
  await AsyncStorage.getItem(STORAGE_KEY)
  .them((results) => {
    const data = JSON.parse(results)
    data[key] = undefined
    delete data[key]
    AsymcStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  })
}

/**
 * Add question card
 *
 * @param deckKey
 * @param question
 * @param answer
 * @returns {Promise.<void>}
 */
export async function addCard({ deckKey, question, answer }) {
  const deck = await fetchDeck(deckKey)
  deck.questions.push({ question, answer })

  AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [deckKey]: { ...deck },
  }))
}

export async function updateSettings(settings) {
  await AsyncStorage.mergeItem(SETTINGS_KEY, JSON.stringify(settings))
}

export async function fetchSettings() {
  try {
    const decks = await AsyncStorage.getItem(SETTINGS_KEY, (error, result) => {
      if (result) {
        return result
      }
      return '{}'
    })

    return JSON.parse(decks)
  } catch (e) {
    return {
      dailyNotification: false,
    }
  }
}
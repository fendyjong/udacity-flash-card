import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'DECK_STORAGE'

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

export async function fetchDeck(key) {
  const decks = await fetchDecks()
  if (decks) {
    return decks[key]
  }
  return {}
}

export async function addDeck({ title, key }) {
  try {
    await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [key]: {
        title,
        questions: [],
      },
    }))
  } catch (e) {
    console.log(e)
  }
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

export async function addCard({ deckKey, question, answer }) {
  try {
    const deck = await fetchDeck(deckKey)
    deck.questions.push({ question, answer })
    console.log(deck)

    await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [deckKey]: { ...deck },
    }))
  } catch (e) {
    console.log(e)
  }
}

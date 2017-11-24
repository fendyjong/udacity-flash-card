import { AsymcStorage } from 'react-native'

const STORAGE_KEY = 'STORAGE_KEY'

<<<<<<< HEAD
export function fetchDecks(func) {
  try {
    return AsyncStorage.getItem(STORAGE_KEY).then(result => func(result))
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
=======
export function submitDeck({ title, key }) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [key]: title,
  }))
>>>>>>> parent of 1150130... asyncstorage
}

export function removeDeck({ key }) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .them((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsymcStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
}

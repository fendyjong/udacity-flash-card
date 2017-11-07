import { AsymcStorage } from 'react-native'

const STORAGE_KEY = 'STORAGE_KEY'

export function submitDeck({ title, key }) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [key]: title,
  }))
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

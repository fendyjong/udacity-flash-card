import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const STORAGE_KEY = 'DECK_STORAGE'
const SETTINGS_KEY = 'SETTINGS'
const NOTIFICATIONS_KEY = 'udacity:notifications'

/**
 * Fetch deck list from storage
 *
 * @returns {Promise.<{}>}
 */
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
    return {}
  }
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

/**
 * Remove deck from deck list
 *
 * @param key
 * @returns {Promise.<void>}
 */
export async function removeDeck({ key }) {
  await AsyncStorage.getItem(STORAGE_KEY)
  .them((results) => {
    const data = JSON.parse(results)
    data[key] = undefined
    delete data[key]
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
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

/**
 * Update settings
 *
 * @param settings
 * @returns {Promise.<void>}
 */
export async function updateSettings(settings) {
  if (settings.notification) {
    clearLocalNotification().then(setLocalNotification())
  } else {
    clearLocalNotification()
  }

  await AsyncStorage.mergeItem(SETTINGS_KEY, JSON.stringify(settings))
}

/**
 * Fetch settings
 *
 * @returns {Promise.<{dailyNotification: boolean}>}
 */
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

/**
 * Clear reminder notification
 *
 * @returns {Promise|Promise.<TResult>|*}
 */
export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATIONS_KEY)
  .then(Notifications.cancelAllScheduledNotificationsAsync())
}

/**
 * Create reminder notification
 *
 * @returns {{title: string, body: string, ios: {sound: boolean}, android: {sound: boolean, priority: string, sticky: boolean, vibrate: boolean}}}
 */
function createNotification() {
  return {
    title: 'Have you studied today?',
    body: 'Don\'t forget to study today',
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  }
}

/**
 * Set reminder notification
 */
export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATIONS_KEY)
  .then(JSON.parse)
  .then((data) => {
    if (data === null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({ status }) => {
        if (status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync()

          const tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)
          tomorrow.setHours(20)
          tomorrow.setMinutes(0)

          Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            {
              time: tomorrow,
              repeat: 'day',
            },
          )

          AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true))
        }
      })
    }
  })
}

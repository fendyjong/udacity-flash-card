import { createStore } from 'redux'
import Reducer from './reducers'

const configureStore = () => {
  const store = createStore(Reducer)

  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState())
  })

  return store
}

export default configureStore

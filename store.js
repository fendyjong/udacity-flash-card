import { createStore } from 'redux'
import Reducer from './reducers'

const configureStore = () => {
  const store = createStore(Reducer)


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore

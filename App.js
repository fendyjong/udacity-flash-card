import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import { Constants } from 'expo'
import { ThemeProvider } from 'styled-components/native'

import { StatusBar, View } from 'react-native'
import configureStore from './store'
import { THEME, Box } from './styled-components'

import reducers from './reducers'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import DeckForm from './components/DeckForm'
import DeckDetail from './components/DeckDetail'

configureStore()

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      headerTitle: 'Decks',
      headerTintColor: THEME.colorIndex['light-1'],
      headerStyle: {
        backgroundColor: THEME.colorIndex.brand,
        shadowColor: '#9E9E9E',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 2,
      },
    },
  },
  Deck: {
    screen: Deck,
  },
  DeckForm: {
    screen: DeckForm,
  },
  DeckDetail: {
    screen: DeckDetail,
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <ThemeProvider theme={THEME}>
          <Box pad='none' colorIndex='light-2' style={{ height: '100%' }}>
            <View
              style={{
                backgroundColor: THEME.colorIndex.brand,
                height: Constants.statusBarHeight,
              }}
            >
              <StatusBar translucent barStyle='light-content' />
            </View>
            <MainNavigator initialRouteName='Home' />
          </Box>
        </ThemeProvider>
      </Provider>
    )
  }
}

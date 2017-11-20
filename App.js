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
import DeckForm from './components/DeckForm'
import DeckDetail from './components/DeckDetail'
import CardForm from './components/CardForm'
import Quiz from './components/Quiz'
import QuizResult from './components/QuizResult'

configureStore()

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      header: null,
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
  DeckForm: {
    screen: DeckForm,
    navigationOptions: {
      headerTitle: 'New Deck',
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTitle: 'Deck Detail',
    },
  },
  CardForm: {
    screen: CardForm,
    navigationOptions: {
      headerTitle: 'New Card',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTitle: 'Quiz',
    },
  },
  QuizResult: {
    screen: QuizResult,
    navigationOptions: {
      headerTitle: 'Quiz Result',
    },
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

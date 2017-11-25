import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import { Constants } from 'expo'
import { ThemeProvider } from 'styled-components/native'

import { StatusBar, View, TouchableOpacity, Platform, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import configureStore from './store'
import { THEME, Box } from './styled-components'

import reducers from './reducers'
import DeckList from './components/DeckList'
import DeckForm from './components/DeckForm'
import DeckDetail from './components/DeckDetail'
import CardForm from './components/CardForm'
import Quiz from './components/Quiz'
import QuizResult from './components/QuizResult'
import Settings from './components/Settings'

configureStore()

/**
 * Recreating back navigation button
 *
 * @param navigation
 * @param label
 */
const headerLeft = (navigation, url, label) => (
  <TouchableOpacity onPress={() => navigation.navigate(url)}>
    <Box direction='row'
         align='center'
         justify='center'
         style={Platform.OS === 'ios' ? { paddingLeft: 8 } : { paddingLeft: 16 }}>
      {Platform.OS === 'ios'
        ? <Ionicons name='ios-arrow-back'
                    size={35}
                    color='#FFFFFF' />
        : <Ionicons name='md-arrow-back'
                    size={25}
                    color='#FFFFFF' />
      }
      {Platform.OS === 'ios'
        ? <Text style={{ paddingLeft: 6, fontSize: 17, paddingBottom: 3, color: '#FFFFFF' }}>{label}</Text>
        : null
      }
    </Box>
  </TouchableOpacity>
)

const headerRight = navigation => (
  <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
    <Box direction='row'
         align='center'
         style={Platform.OS === 'ios' ? { paddingLeft: 8 } : { paddingLeft: 16 }}>
      {Platform.OS === 'ios'
        ? <Ionicons name='ios-settings'
                    size={35}
                    color='#FFFFFF' />
        : <Ionicons name='md-settings'
                    size={25}
                    color='#FFFFFF' />
      }
    </Box>
  </TouchableOpacity>
)

/**
 * Universal header style
 *
 * @type {{headerTintColor: *, headerStyle: {backgroundColor: string, shadowColor: string, shadowOffset: {width: number, height: number}, shadowOpacity: number, shadowRadius: number}}}
 */
const headerStyle = {
  headerTintColor: THEME.colorIndex['light-1'],
  headerStyle: {
    backgroundColor: THEME.colorIndex.brand,
    shadowColor: '#9E9E9E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
}

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Decks',
      ...headerStyle,
      headerLeft: Platform.OS === 'ios'
        ?
        <TouchableOpacity onPress={() => navigation.navigate('DeckForm')}
                          style={{ paddingLeft: 16 }}>
          <Ionicons name='ios-add'
                    size={45}
                    color='#FFFFFF' />
        </TouchableOpacity>
        : null,
      headerRight:
        headerRight(navigation),
    }),
  },
  DeckForm: {
    screen: DeckForm,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'New Deck',
      ...headerStyle,
      headerLeft: headerLeft(navigation, 'Home', 'Decks'),
      headerRight: headerRight(navigation),
    }),
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Deck',
      ...headerStyle,
      headerLeft: headerLeft(navigation, 'Home', 'Decks'),
      headerRight: headerRight(navigation),
    }),
  },
  CardForm: {
    screen: CardForm,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'New Card',
      ...headerStyle,
      headerLeft: headerLeft(navigation, 'DeckDetail', 'Deck'),
      headerRight: headerRight(navigation),
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Quiz',
      ...headerStyle,
      headerLeft: headerLeft(navigation, 'DeckDetail', 'Deck'),
      headerRight: headerRight(navigation),
    }),
  },
  QuizResult: {
    screen: QuizResult,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Quiz Result',
      ...headerStyle,
      headerLeft: headerLeft(navigation, 'DeckDetail', 'Deck'),
      headerRight: headerRight(navigation),
    }),
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Settings',
      ...headerStyle,
      headerRight: null,
    }),
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
                top: 0,
                left: 0,
                zIndex: 100,
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

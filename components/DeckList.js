import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import {
  THEME,
  Box,
  ActionButton,
} from '../styled-components'

import Deck from './Deck'
import { deckSelect } from '../actions/deck'
import { decksList } from '../actions/decks'

import { fetchDecks } from '../utils/api'

/**
 * Display list of decks
 */
class DeckList extends Component {
  /**
   * Fetch list of decks from storage
   *
   * @returns {Promise.<void>}
   */
  async componentWillMount() {
    const list = await fetchDecks()

    if (list) {
      this.props.decksList(list)
    }
  }

  /**
   * Handle add button for android
   */
  handleActionButton = () => {
    const { navigation } = this.props
    navigation.navigate('DeckForm')
  }

  /**
   * Handle select deck on touch
   *
   * @param url
   * @param deckKey
   * @returns {Promise.<void>}
   */
  handleSelectDeck = async (url, deckKey) => {
    const { navigation, deckSelect, decks } = this.props
    const deck = decks[deckKey]

    deckSelect({ key: deckKey, deck })
    navigation.navigate(url)
  }

  /**
   * Render deck in FlatList
   *
   * @param key
   * @param title
   * @param questions
   */
  renderItem = ({ item: { key, title, questions } }) => (
    <Deck key={key}
          title={title}
          noOfCards={questions.length.toString()}
          onPress={() => this.handleSelectDeck('DeckDetail', key)} />
  )

  render() {
    const { decks } = this.props

    return (
      <Box pad='none' style={{ flex: 1 }}>
        <FlatList data={decks && Object.values(decks)}
                  renderItem={this.renderItem} />
        <ActionButton onPress={this.handleActionButton}
                      activeOpacity={0.4}>
          {Platform.OS === 'ios'
            ? null
            : <Ionicons name='md-add-circle'
                        size={60}
                        color={THEME.colorIndex.brand} />
          }

        </ActionButton>
      </Box>
    )
  }
}

DeckList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  deckSelect: PropTypes.func.isRequired,
  decksList: PropTypes.func.isRequired,
  decks: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]).isRequired,
}

const mapStateToProps = ({ decks }) => ({
  decks,
})

export default connect(mapStateToProps, { decksList, deckSelect })(DeckList)

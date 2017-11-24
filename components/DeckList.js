import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'

import {
  Box,
  Label,
  ActionButton,
} from '../styled-components'

import Deck from './Deck'
import { deckSelect } from '../actions/deck'
import { decksList } from '../actions/decks'

import { fetchDecks } from '../utils/api'

class DeckList extends Component {
  async componentWillMount() {
    const list = await fetchDecks()

    if (list) {
      this.props.decksList(list)
    }
  }

  handleActionButton = () => {
    const { navigation } = this.props
    navigation.navigate('DeckForm')
  }

  handleSelectDeck = async (url, deckKey) => {
    const { navigation, deckSelect, decks } = this.props
    const deck = decks[deckKey]

    deckSelect({ key: deckKey, deck })
    navigation.navigate(url)
  }

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
          <Label>+</Label>
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

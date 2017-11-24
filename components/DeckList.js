import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Box,
  Label,
  ActionButton,
} from '../styled-components'

import Deck from './Deck'
<<<<<<< HEAD
import { deckSelect, deckList } from '../actions/decks'

class DeckList extends Component {
<<<<<<< HEAD
  state = {
    list: {},
  }

  componentWillMount() {
    /*
    const list = await fetchDecks()
    console.log('fetch decks')
    if (list) {
      this.setState({
        list,
      })
    }
    */
    this.props.deckList()
  }

=======
>>>>>>> parent of 1150130... asyncstorage
=======
import { deckSelect } from '../actions/decks'

class DeckList extends Component {
>>>>>>> parent of 1150130... asyncstorage
  handleActionButton = () => {
    const { navigation } = this.props
    navigation.navigate('DeckForm')
  }

  handleOnPress = (url, deckKey) => {
    const { navigation } = this.props

    this.props.deckSelect(deckKey)
    navigation.navigate(url)
  }

  render() {
    const { list } = this.props

    return (
      <Box pad='none' style={{ flex: 1 }}>
        <Box>
          {Object.keys(list).map(key => (
            <Deck key={key}
                  title={list[key].title}
                  noOfCards={list[key].questions.length.toString()}
                  onPress={() => this.handleOnPress('DeckDetail', key)} />
          ))}
        </Box>
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
  deckList: PropTypes.func.isRequired,
  deckSelect: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
}

const mapStateToProps = ({ decks: { list } }) => ({
  list,
})

const mapDispatchToProps = dispatch => ({
  deckList: _ => dispatch(fetchDecks(deckList)),
  deckSelect: key => dispatch(deckSelect(key)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)

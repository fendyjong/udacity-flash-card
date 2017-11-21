import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label, Heading, Box } from '../styled-components'

import { fetchDeck } from '../utils/api'

class DeckDetail extends Component {
  state = {
    deck: {},
  }

  async componentWillMount() {
    const { selectedDeckKey } = this.props
    const deck = await fetchDeck(selectedDeckKey)

    this.setState({
      deck,
    })
  }

  render() {
    const { deck } = this.state
    const { navigation } = this.props

    return (
      <Card full={true}
            align='center'
            justify='center'>
        <Box align='center'>
          <Heading>{deck.title}</Heading>
          <Heading tag='h4' colorIndex='grey-4-a'>{deck.questions ? deck.questions.length : 0} Cards</Heading>
        </Box>
        <Box align='baseline'
             justify='space-around'
             style={{ marginTop: 100, height: 140 }}>
          <Button style={{ width: 160 }}
                  align='center'
                  onPress={() => navigation.navigate('CardForm')}>
            <Label>Add Card</Label>
          </Button>
          <Button colorIndex='brand'
                  style={{ width: 160 }}
                  onPress={() => navigation.navigate('Quiz')}>
            <Label colorIndex='light-1'>Start Quiz</Label>
          </Button>
        </Box>
      </Card>
    )
  }
}

DeckDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  selectedDeckKey: PropTypes.string.isRequired,
}

const mapStateToProps = ({ decks: { selectedDeckKey } }) => ({
  selectedDeckKey,
})

export default connect(mapStateToProps)(DeckDetail)

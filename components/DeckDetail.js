import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label, Heading, Box } from '../styled-components'
import Styles from '../styled-components/Styles'

class DeckDetail extends Component {
  render() {
    const { navigation, deck } = this.props
    console.log(deck)

    return (
      <Card full={true}
            align='center'
            justify='center'>
        <Box align='center'>
          <Heading>{deck.title}</Heading>
          <Heading tag='h4' colorIndex='grey-4-a'>{deck.questions.length} Cards</Heading>
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
  deck: PropTypes.object.isRequired,
}

const mapStateToProps = ({ decks: { deck } }) => ({
  deck,
})

export default connect(
  mapStateToProps,
  {},
)(DeckDetail)

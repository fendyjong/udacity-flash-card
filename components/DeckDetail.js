import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label, Heading, Box } from '../styled-components'

import { resetQuiz } from '../actions/quiz'

/**
 * Display deck detail
 */
class DeckDetail extends Component {
  render() {
    const { navigation, deck: { title, questions }, resetQuiz } = this.props

    return (
      <Card full={true}
            align='center'
            justify='center'>
        <Box align='center'>
          <Heading>{title}</Heading>
          <Heading tag='h4' colorIndex='grey-4-a'>{questions.length} Cards</Heading>
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
                  disabled={!questions.length}
                  onPress={() => {
                    resetQuiz()
                    navigation.navigate('Quiz')
                  }}>
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
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
  }).isRequired,
  resetQuiz: PropTypes.func.isRequired,
}

const mapStateToProps = ({ decks, deck }) => ({
  decks,
  deck,
})

export default connect(mapStateToProps, { resetQuiz })(DeckDetail)

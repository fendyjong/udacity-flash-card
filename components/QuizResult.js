import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, Button, Label, Heading, Box } from '../styled-components'

import { clearLocalNotification, setLocalNotification } from '../utils/api'

import { resetQuiz } from '../actions/quiz'

/**
 * Display quiz result
 */
class QuizResult extends Component {
  /**
   * Handle navigation when button is pressed
   * Set reminder notification to tomorrow
   *
   * @param url
   */
  handleNavigation = (url) => {
    const { navigation, resetQuiz } = this.props

    clearLocalNotification().then(setLocalNotification)

    resetQuiz()
    navigation.navigate(url)
  }

  render() {
    const { result, totalQuestions } = this.props

    return (
      <Card full={true}
            align='center'
            justify='center'>
        <Box align='center'>
          <Heading>Result</Heading>
          <Heading tag='h4' colorIndex='grey-4-a'>{result} of {totalQuestions} correct</Heading>
        </Box>
        <Box align='baseline'
             justify='space-around'
             style={{ marginTop: 100, height: 140 }}>
          <Button style={{ width: 160 }}
                  colorIndex='brand'
                  align='center'
                  onPress={() => this.handleNavigation('Quiz')}>
            <Label colorIndex='light-1'>Replay</Label>
          </Button>
          <Button style={{ width: 160 }}
                  onPress={() => this.handleNavigation('Home')}>
            <Label>Back to Decks</Label>
          </Button>
        </Box>
      </Card>
    )
  }
}

QuizResult.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  resetQuiz: PropTypes.func.isRequired,
  result: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
}

const mapStateToProps = ({ quiz: { result, totalQuestions } }) => ({
  result,
  totalQuestions,
})

export default connect(mapStateToProps, { resetQuiz })(QuizResult)

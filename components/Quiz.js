import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label, Heading, Box, Anchor } from '../styled-components'

import { answerQuiz } from '../actions/quiz'

/**
 * Play quiz
 */
class Quiz extends Component {
  state = {
    totalQuestions: 0,
    currentQuestion: 1,
    questions: [],
    question: '',
    answer: '',
    openAnswer: false,
  }

  /**
   * Fetch questions and store the first {question, answer} to state to be displayed
   *
   * @returns {Promise.<void>}
   */
  async componentWillMount() {
    const { questions } = this.props.deck
    const { question, answer } = questions[0]
    this.setState({
      questions,
      totalQuestions: questions.length,
      question,
      answer,
    })
  }

  /**
   * Fetch the next question in the card list
   * Save answer (Correct or Incorrect) to redux quiz result
   *
   * @param correct
   */
  fetchNextQuestions = (correct) => {
    const { currentQuestion, questions, totalQuestions } = this.state
    const { navigation, answerQuiz } = this.props
    // const totalQuestions = questions.length

    if (currentQuestion <= totalQuestions) {
      // TODO save answer to redux
      answerQuiz({ correct, totalQuestions })

      if (currentQuestion === totalQuestions) {
        navigation.navigate('QuizResult')
      } else {
        const { question, answer } = questions[currentQuestion]

        this.setState({
          currentQuestion: currentQuestion + 1,
          question,
          answer,
        })
      }
    }
  }

  render() {
    const { currentQuestion, totalQuestions, question, answer, openAnswer } = this.state

    return (
      <Card full={true}>
        <Label>{currentQuestion}/{totalQuestions}</Label>
        <ScrollView>
          <Box align='center'>
            {!openAnswer && <Heading tag='h2'>{question}</Heading>}
            {openAnswer && <Heading tag='h2' colorIndex='grey-4-a'>{answer}</Heading>}
            <Anchor colorIndex='critical'
                    onPress={() => this.setState({ openAnswer: !openAnswer })}>
              {openAnswer ? 'Question' : 'Answer'}
            </Anchor>
          </Box>
          <Box align='center'
               justify='space-around'
               style={{ marginTop: 100, height: 140, bottom: 0 }}>
            <Button style={{ width: 160 }}
                    colorIndex='ok'
                    align='center'
                    onPress={() => this.fetchNextQuestions(true)}>
              <Label colorIndex='light-1'>Correct</Label>
            </Button>
            <Button colorIndex='critical'
                    style={{ width: 160 }}
                    onPress={() => this.fetchNextQuestions(false)}>
              <Label colorIndex='light-1'>Incorrect</Label>
            </Button>
          </Box>
        </ScrollView>
      </Card>
    )
  }
}

Quiz.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  answerQuiz: PropTypes.func.isRequired,
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
  }).isRequired,
}

const mapStateToProps = ({ deck }) => ({
  deck,
})

export default connect(mapStateToProps, { answerQuiz })(Quiz)

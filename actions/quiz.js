import { QUIZ_PLAY, QUIZ_ANSWER, QUIZ_RESULT } from './index'

export const getQuiz = ({ card, nextQuiz }) => ({
  // play card
  // get quiz question and answer
  // get quiz number 0 of 20 quiz
  type: QUIZ_PLAY,
  card,
  nextQuiz,
})

export const answerQuiz = ({ correct }) => ({
  type: QUIZ_ANSWER,
  correct,
})

export const quizResult = () => ({
  type: QUIZ_RESULT,
})

/**
 {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
 */

import { QUIZ_PLAY, QUIZ_ANSWER, QUIZ_RESET } from './index'

/**
 * Get next quiz
 *
 * @param card
 * @param nextQuiz
 */
export const getQuiz = ({ currentCard, nextQuiz }) => ({
  // play card
  // get quiz question and answer
  // get quiz number 0 of 20 quiz
  type: QUIZ_PLAY,
  currentCard,
  nextQuiz,
})

/**
 * Calculate quiz correct answer
 *
 * @param correct
 */
export const answerQuiz = ({ correct, totalQuestions }) => ({
  type: QUIZ_ANSWER,
  correct,
  totalQuestions,
})

export const resetQuiz = () => ({
  type: QUIZ_RESET,
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

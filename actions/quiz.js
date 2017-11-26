import { QUIZ_ANSWER, QUIZ_RESET } from './index'

/**
 * Calculate quiz of correct answer
 *
 * @param correct
 */
export const answerQuiz = ({ correct, totalQuestions }) => ({
  type: QUIZ_ANSWER,
  correct,
  totalQuestions,
})

/**
 * reset quiz result to 0
 */
export const resetQuiz = () => ({
  type: QUIZ_RESET,
})

import { QUIZ_PLAY, QUIZ_ANSWER, QUIZ_RESET } from '../actions'
import { createReducer } from './utils'

const initialState = {
  result: 0,
  totalQuestions: 0,
}

const handlers = {
  [QUIZ_PLAY]: (state, action) => {
    const currentCard = action.card
    const currentQuiz = state[currentCard].questions[action.nextQuiz]

    return {
      ...state,
      question: {
        ...currentQuiz,
      },
    }
  },
  [QUIZ_ANSWER]: (state, action) => {
    const result = state.result + (action.correct ? 1 : 0)
    return {
      ...state,
      result,
      totalQuestions: action.totalQuestions,
    }
  },
  [QUIZ_RESET]: () => ({
    result: 0,
    totalQuestions: 0,
  }),
}

export default createReducer(initialState, handlers)

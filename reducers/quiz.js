import { QUIZ_PLAY, QUIZ_ANSWER, QUIZ_RESULT } from '../actions'
import { createReducer } from './utils'

const initialState = {}

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
    const result = state.correct + action.correct
    return {
      ...state,
      result,
    }
  },
}

export default createReducer(initialState, handlers)

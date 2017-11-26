import { QUIZ_ANSWER, QUIZ_RESET } from '../actions'
import { createReducer } from './utils'

const initialState = {
  result: 0,
  totalQuestions: 0,
}

const handlers = {
  /**
   * Store correct answer
   *
   * @param state
   * @param action
   * @returns {{result: *, totalQuestions: (number|*)}}
   */
  [QUIZ_ANSWER]: (state, action) => {
    const result = state.result + (action.correct ? 1 : 0)
    return {
      ...state,
      result,
      totalQuestions: action.totalQuestions,
    }
  },
  /**
   * Reset quiz answer
   */
  [QUIZ_RESET]: () => ({
    result: 0,
    totalQuestions: 0,
  }),
}

export default createReducer(initialState, handlers)

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER
} from 'store/actions/counterActions'

let initialState = 0

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return state + 1
    }
    case DECREMENT_COUNTER: {
      return state - 1
    }
    case RESET_COUNTER: {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default todoReducer

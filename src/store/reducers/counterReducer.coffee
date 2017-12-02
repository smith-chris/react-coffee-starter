import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER
} from 'store/actions/counterActions'

initialState = 0

export default todoReducer = (state = initialState, action) ->
  switch (action.type)
    when INCREMENT_COUNTER
      return state + 1
    when DECREMENT_COUNTER
      return state - 1
    when RESET_COUNTER
      return initialState
    else
      return state

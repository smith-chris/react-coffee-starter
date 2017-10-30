export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const RESET_COUNTER = 'RESET_COUNTER'

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
})

export const resetCounter = () => ({
  type: RESET_COUNTER
})

export INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export RESET_COUNTER = 'RESET_COUNTER'

export incrementCounter = ->
  type: INCREMENT_COUNTER

export decrementCounter = ->
  type: DECREMENT_COUNTER

export resetCounter = ->
  type: RESET_COUNTER

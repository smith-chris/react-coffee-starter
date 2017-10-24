import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {
  incrementCounter,
  decrementCounter
} from 'store/actions/counterActions'
import Button from 'components/Button'

const Main = props => {
  const {counter, increment, decrement} = props
  return (
    <div>
      <h1>Main view</h1>
      <p>{counter}</p>
      <Link to='/second'>
        <Button/>
      </Link>
      <div>
        <Button
          text='decrement!'
          onClick={decrement}
        />
        <Button
          text='increment!'
          onClick={increment}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

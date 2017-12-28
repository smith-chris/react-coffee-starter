import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import styles from './Main.sass'

import {
  incrementCounter,
  decrementCounter
} from 'store/actions/counterActions'

import Button from 'components/Button/Button'
import Header from 'components/Header/Header'

Main = (props) ->
  {counter, increment, decrement} = props
  return (
    <div className={styles.main}>
      <Header>Main view</Header>
      <Link to='/other'>
        <Button text='Go to other view'/>
      </Link>
      <p>{counter}</p>
      <div>
        <Button text='decrement!' onClick={decrement}/>
        <Button text='increment!' onClick={increment}/>
      </div>
    </div>
  )

mapStateToProps = (state) ->
  counter: state.counter

mapDispatchToProps = (dispatch) ->
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter())

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

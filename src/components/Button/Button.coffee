import React from 'react'
import styles from './Button.sass'

export default Button = (props) ->
  {onClick, text} = props
  return (
    <button onClick={onClick} className={styles.button}>
      {text || 'Hello world!'}
    </button>
  )

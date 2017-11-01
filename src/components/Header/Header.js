import React from 'react'
import styles from './Header.sass'

let Header = props => {
  const {children} = props
  return <h1 className={styles.header}>{children}</h1>
}

export default Header

import React from 'react'
import styles from './Header.sass'

export default Header = (props) =>
  {children} = props
  return <h1 className={styles.header}>{children}</h1>

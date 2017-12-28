import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Other.sass'

import Button from 'components/Button/Button'
import Header from 'components/Header/Header'

export default Other = ->
  <div className={styles.other}>
    <Header>Other view</Header>
    <Link to='/'>
      <Button text='Go to main view'/>
    </Link>
  </div>

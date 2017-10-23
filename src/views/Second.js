import React from 'react'
import {Link} from 'react-router-dom'

import Button from 'components/Button'

const Second = () => (
  <div>
    <h1>Second view</h1>
    <Link to='/'>
      <Button/>
    </Link>
  </div>
)

export default Second

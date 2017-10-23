import React from 'react'
import {Link} from 'react-router-dom'

import Button from 'components/Button'

const Main = () => (
  <div>
    <h1>Main view</h1>
    <Link to='/second'>
      <Button/>
    </Link>
  </div>
)

export default Main

import React, {Component} from 'react'
import {Provider} from 'react-redux'

import Routes from 'routes/routes'

export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Routes/>
      </Provider>
    )
  }
}
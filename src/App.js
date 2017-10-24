import React, {Component} from 'react'
import { Provider } from 'react-redux'

import store from 'store/store'
import Routes from 'routes/routes'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
  }
}
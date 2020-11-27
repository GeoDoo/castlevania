import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

import Castlevania from './Castlevania'

import './assets/fonts/malignant.ttf'
import './index.pcss'

ReactDOM.render(
  <Provider store={store}>
    <Castlevania />
  </Provider>,
  document.getElementById('root'),
)

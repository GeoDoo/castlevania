import { combineReducers } from 'redux'

import health from './health'
import messages from './messages'
import ui from './ui'

export default combineReducers({
  health,
  messages,
  ui,
})

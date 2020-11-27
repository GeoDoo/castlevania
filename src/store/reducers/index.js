import { combineReducers } from 'redux'

import characters from './characters'
import messages from './messages'
import ui from './ui'

export default combineReducers({
  characters,
  messages,
  ui,
})

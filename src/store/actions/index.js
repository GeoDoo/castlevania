import { setHealth } from './health'
import { setMessage } from './messages'
import {
  setIsHeroDiceShown,
  setIsFoeDiceShown,
  setIsHitMessageShown,
} from './ui'
import { setDice } from './dice'

import { RESET } from './types'

const reset = () => ({
  type: RESET,
})

const actions = {
  setHealth,
  setMessage,
  setIsHeroDiceShown,
  setIsFoeDiceShown,
  setIsHitMessageShown,
  setDice,
  reset,
}

export default actions

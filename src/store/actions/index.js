import { setHealth } from './health'
import { setIsHeroDiceShown, setIsFoeDiceShown } from './ui'
import { setDice } from './dice'

const reset = () => ({
  type: 'RESET',
})

const actions = {
  setHealth,
  setIsHeroDiceShown,
  setIsFoeDiceShown,
  setDice,
  reset,
}

export default actions

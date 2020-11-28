import { SET_DICE } from './types'

export const setDice = (character, dice) => ({
  type: SET_DICE,
  character,
  dice,
})

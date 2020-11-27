import types from './types'

export const setDice = (character, dice) => ({
  type: types.SET_DICE,
  character,
  dice,
})

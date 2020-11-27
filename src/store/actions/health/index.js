import types from './types'

export const setHealth = (character, damage) => ({
  type: types.SET_HEALTH,
  character,
  damage,
})

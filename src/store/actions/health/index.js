import { SET_HEALTH } from './types'

export const setHealth = (character, damage) => ({
  type: SET_HEALTH,
  character,
  damage,
})

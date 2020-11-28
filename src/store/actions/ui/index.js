import {
  SET_IS_HERO_DICE_SHOWN,
  SET_IS_FOE_DICE_SHOWN,
  SET_IS_HIT_MESSAGE_SHOWN,
} from './types'

export const setIsHeroDiceShown = () => ({
  type: SET_IS_HERO_DICE_SHOWN,
})

export const setIsFoeDiceShown = () => ({
  type: SET_IS_FOE_DICE_SHOWN,
})

export const setIsHitMessageShown = () => ({
  type: SET_IS_HIT_MESSAGE_SHOWN,
})

import types from '../../actions/ui/types'

const initialState = {
  isHeroDiceShown: false,
  isFoeDiceShown: false,
  isHitMessageShown: false,
  isAttackDisabled: false,
}

const ui = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_HERO_DICE_SHOWN:
      return {
        ...state,
        isHeroDiceShown: true,
        isAttackDisabled: true,
      }
    case types.SET_IS_FOE_DICE_SHOWN:
      return {
        ...state,
        isFoeDiceShown: true,
      }
    case types.SET_IS_HIT_MESSAGE_SHOWN:
      return {
        ...state,
        isHitMessageShown: true,
      }
    case 'RESET':
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default ui

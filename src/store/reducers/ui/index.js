import types from '../../actions/ui/types'

const initialState = {
  isHeroDiceShown: false,
  isFoeDiceShown: false,
  isHitMessageShown: false,
  isOutcomeMessageShown: false,
}

const ui = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_HERO_DICE_SHOWN:
      return {
        ...state,
        isHeroDiceShown: true,
      }
    case types.SET_IS_FOE_DICE_SHOWN:
      return {
        ...state,
        isFoeDiceShown: true,
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

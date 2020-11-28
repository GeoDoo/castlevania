import { SET_DICE } from 'actions/dice/types'
import { RESET } from 'actions/types'

const initialState = {
  hero: [],
  foe: [],
}

const dice = (state = initialState, action) => {
  switch (action.type) {
    case SET_DICE:
      return {
        ...state,
        [action.character]: action.dice,
      }
    case RESET:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default dice

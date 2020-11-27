import types from '../../actions/dice/types'
import { roll } from '../../../utils/roll'

const initialState = {
  hero: [],
  foe: [],
}

const dice = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DICE:
      return {
        ...state,
        [action.character]: [roll(), roll()],
      }
    default:
      return state
  }
}

export default dice

import types from '../../actions/dice/types'

const initialState = {
  hero: [],
  foe: [],
}

const dice = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DICE:
      return {
        ...state,
        [action.character]: action.dice,
      }
    case 'RESET':
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default dice

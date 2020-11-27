import types from '../../actions/health/types'

const initialState = {
  hero: 100,
  foe: 100,
}

const health = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_HEALTH:
      return {
        ...state,
        [action.character]:
          state[action.character] - action.damage < 0
            ? 0
            : state[action.character] - action.damage,
      }
    default:
      return state
  }
}

export default health

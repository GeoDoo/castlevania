import types from '../../actions/messages/types'

const initialState = {
  hit: '',
  outcome: '',
}

const messages = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MESSAGE:
      return {
        ...state,
        hit: action.message,
      }
    case 'RESET':
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default messages

import { SET_MESSAGE } from 'actions/messages/types'
import { RESET } from 'actions/types'

const initialState = {
  hit: '',
}

const messages = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        hit: action.message,
      }
    case RESET:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default messages

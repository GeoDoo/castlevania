const initialState = {
  hit: '',
  outcome: '',
}

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET':
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default messages

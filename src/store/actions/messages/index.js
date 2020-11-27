import types from './types'

export const setMessage = message => ({
  type: types.SET_MESSAGE,
  message,
})

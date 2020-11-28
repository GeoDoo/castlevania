import reducer from './index.js'
import { SET_HEALTH } from '../../actions/health/types'

describe('health reducer', () => {
  it('should set health', () => {
    const state = {
      foe: 100,
    }
    const action = {
      type: SET_HEALTH,
      character: 'foe',
      damage: 40,
    }
    const newState = reducer(state, action)

    expect(newState.foe).toBe(60)
  })

  it('should set health to zero if total damage exceeds 100', () => {
    const state = {
      foe: 100,
    }
    const action = {
      type: SET_HEALTH,
      character: 'foe',
      damage: 110,
    }
    const newState = reducer(state, action)

    expect(newState.foe).toBe(0)
  })
})

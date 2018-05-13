import { LOGIN } from '../types'

const initialState = {
  userId: ''
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { userId: action.userId })
      break
    default:
      return state
  }
}

import { LOGIN, PLAY } from '../types'

const initialState = {
  userId: '',
  userName: '',
  videoId: ''
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { userId: action.userId, userName: action.userName })
      break
    case PLAY:
      return Object.assign({}, state, { videoId: action.videoId })
      break
    default:
      return state
  }
}

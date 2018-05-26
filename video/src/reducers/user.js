import { LOGIN, PLAY, GETLIST } from '../types'

const initialState = {
  userId: '',
  userName: '',
  videoId: '',
  videoList: []
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { userId: action.userId, userName: action.userName })
      break
    case PLAY:
      return Object.assign({}, state, { videoId: action.videoId })
      break
    case GETLIST:
      return Object.assign({}, state, { videoList: action.videoList })
      break
    default:
      return state
  }
}

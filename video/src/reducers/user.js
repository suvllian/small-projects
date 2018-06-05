import { LOGIN, LOGOUT, PLAY, GETLIST, SEARCH } from '../types'

const initialState = {
  userId: '',
  userName: '',
  videoId: '',
  videoList: [],
  searchVideos: []
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { userId: action.userId, userName: action.userName })
      break
    case LOGOUT:
      return Object.assign({}, state, { userId: '', userName: '' })
      break
    case PLAY:
      return Object.assign({}, state, { videoId: action.videoId })
      break
    case GETLIST:
      return Object.assign({}, state, { videoList: action.videoList })
      break
    case SEARCH:
      return Object.assign({}, state, { searchVideos: action.searchVideos })
      break
    default:
      return state
  }
}

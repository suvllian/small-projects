import { LOGIN, PLAY } from '../types'
import { loginFetch } from './../api/index'

export const login = data => {
  return {
    type: LOGIN,
    userId: data.userId
  }
}

export const play = data => {
  return {
    type: PLAY,
    videoId: data.videoId
  }
}

function fetchPosts(fetchApi, data) {
  return dispatch => {
    return fetchApi(data).then((data) => {
      dispatch(login(data))
    }).catch((e) => { console.log(e.msg) })
  }
}

export function fetchPostsIfNeeded(fetchApi, data) {
  return (dispatch, getState) => dispatch(fetchPosts(fetchApi, data))
}
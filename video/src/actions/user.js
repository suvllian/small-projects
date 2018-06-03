import { LOGIN, PLAY, GETLIST, SEARCH } from '../types'
import { loginFetch } from './../api/index'


export const login = data => {
  return {
    type: LOGIN,
    userId: data.userId,
    userName: data.username
  }
}

export const play = data => {
  return {
    type: PLAY,
    videoId: data.videoId
  }
}

export const getVideoList = data => {
  return {
    type: GETLIST,
    videoList: data.data
  }
}

export const searchVideo = data => {
  return {
    type: SEARCH,
    searchVideos: data.data
  }
}

function fetchPosts(fetchApi, actionApi, data) {
  return dispatch => {
    return fetchApi(data).then((data) => {
      dispatch(actionApi(data))
    }).catch((e) => { console.log(e.msg) })
  }
}

export function fetchPostsIfNeeded(fetchApi, actionApi, data) {
  return (dispatch, getState) => dispatch(fetchPosts(fetchApi, actionApi, data))
}
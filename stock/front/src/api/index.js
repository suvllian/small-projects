import { jsonp, parseParams } from '../utils/jsonp.js'
import { APIURL, postCongig } from '../config'
import axios from 'axios'

export default {
  getMethod (path, params) {
    return jsonp(`${APIURL}/${path}`, params)
  },
  postMethod (path, params) {
    return axios.post(`${APIURL}/${path}`, parseParams(params), postCongig)
  }
}

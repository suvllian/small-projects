export const APIURL = location.href.includes('localhost') ? 'http://localhost:9000' : 
  'http://47.100.104.209:9000'

export const postCongig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

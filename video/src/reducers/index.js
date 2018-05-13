import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import user from './user' // 引入update这个reducer

export default combineReducers({
    user,
    routing: routerReducer
})
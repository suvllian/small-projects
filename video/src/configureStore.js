import thunk from 'redux-thunk' // redux-thunk 支持 dispatch function，并且可以异步调用它
import { createStore, applyMiddleware, compose } from 'redux' // 引入redux createStore、中间件及compose 

// 创建一个中间件集合
const middleware = [thunk]

// 利用compose增强store，这个 store 与 applyMiddleware 和 redux-devtools 一起使用
const finalCreateStore = compose(
    applyMiddleware(...middleware)
)(createStore)

export default finalCreateStore
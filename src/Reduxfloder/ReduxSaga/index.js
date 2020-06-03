//创建中间件，创建store，把数据源暴露出去
import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { firstReducer as count } from '../count.redux'
import user from './user.redux'
import createSagaMiddleware from 'redux-saga'
import saga from './sagas'

// 第一步创建中间件
const mid = createSagaMiddleware()
// 第二步应用中间件
const store = createStore(
    // 当reducers错的时候，要做reducer模块化
    combineReducers({count, user}),
    applyMiddleware(mid, logger) 
)
// 第三步 执行saga 把监听事件跑起来
mid.run(saga)
export default store
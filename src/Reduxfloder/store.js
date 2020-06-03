// 1.从redux中引入createRedux创建仓库store
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const firstReducer = ( state = 0, action)=>{
    switch (action.type) {
        case 'increment':
            return state + 1 ;
        case 'decrement':
            return state - 1;
        default:
            return state ;
    }
}

// 使用中间件，logger最好是放在最后
const store2 = createStore(firstReducer,applyMiddleware(thunk,logger))


export default store2
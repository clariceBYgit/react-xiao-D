import { createStore,applyMiddleware } from 'redux'
import createSagaMidleware from 'redux-saga' 
import logger from 'redux-logger'
import mySaga from './sagas'
import user from './user.redux'

const mid = createSagaMidleware()
const store = createStore(
    user,
    applyMiddleware(mid,logger)
)

mid.run(mySaga)

export default store
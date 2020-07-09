import { call, put, takeEvery} from 'redux-saga/effects'

const api = {
    login(){
        return new Promise(( resolve, reject )=>{
            if( Math.random()>0.5 ){
                setTimeout(()=>{
                    resolve({id:1,name:'tim'})
                },1000)
            } else {
                reject({message:'用户名或密码错误'})
            }
        })
    }
}


function * login(action) {
    try {
        const result = yield call(api.login)
        yield put({type:'login',result})
    } catch (error) {
        yield put({type:'login-failed',message:error.message})
    }
}

function * mySaga() {
    yield takeEvery('login-request',login)
}

export default mySaga
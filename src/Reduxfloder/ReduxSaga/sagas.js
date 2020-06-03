// sagas.js  供我们捕获action创建函数返回的action

import { call, put, takeEvery } from 'redux-saga/effects'

// 编写模拟登陆接口
const api = {
    // 异步登陆方法login
    login(){
        // 返回一个promise对象
        return new Promise( (resolve, reject) => {
            // 模拟异步登陆
            setTimeout(()=>{
                  // 随机数模仿登陆成功与失败
            if( Math.random() > 0.5){
                // 登陆成功
               resolve( {id: 1, name: 'Tim' })
            } else {
                reject({message:'用户或登陆密码错误'})
            }
            },1000) 
          
        })
    }
}


// 编写真正工作的saga Es6里面的星星函数 Generator生成器
function * login(action) {    
    try {
        // 如登陆成功  call 调用异步方法
        const res = yield call (api.login)
        // put派发action，触发reducer
        yield put({type:'login',res})
    } catch (error) {
        // 登陆失败
        yield put({type:'login_failed',message:error.message})
    }
    
}

function * mySaga(){
    // takeEvery事件监听，action来了后就触发一个函数，其实是触发上面的login星星函数
    yield takeEvery('login_request',login)
}

export default mySaga


// user.redux.js   用于管理登陆的reducer和action文件
// 初始化state
const initialState = {
    isLogin : false
}
// reducer
export default (state = initialState, action) => {
    switch (action.type) {

    case 'login':
        return { isLogin: true }

    default:
        return state
    }
}
 

// 编写redux-saga生成action的函数
const login = function(){
    // 返回正在请求的路中
    return { type: 'login_request' }
}

export { login }
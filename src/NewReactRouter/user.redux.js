const initialState = {
    isLogin:false
}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'login':
        return { isLogin:true }

    default:
        return state
    }
}

const login = function(){
    return {type:'login-request'}
}

export {login}
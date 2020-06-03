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

const    increment = ()=>({type:'increment'})
const    decrement = ()=> ({type:'decrement'})
    // 异步操作:使用中间件applyMiddleware,thunk 
const   asyncAdd = ()=>dispatch=>{
        setTimeout(()=>{
            dispatch({type:'increment'})
        },2000

        )
    }

export  {firstReducer, increment, decrement, asyncAdd }
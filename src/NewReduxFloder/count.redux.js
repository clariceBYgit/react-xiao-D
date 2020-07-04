const firstRedux = ( state = 0, action ) => {
    switch (action.type) {
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        default:
            return state
    }
}

const increment = () => ({type:"increment"})
const decrement = () => ({type:"decrement"})
const asyncDe = () => dispatch => {
    setTimeout(()=>{
        dispatch({type:"decrement"})
    },2000)
} 


export { firstRedux, increment, decrement, asyncDe}
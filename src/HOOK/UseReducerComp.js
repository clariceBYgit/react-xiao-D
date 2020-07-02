import React,{ useReducer } from 'react'
const initState = {count:0}
const reducer = ( state, action) => {
    switch (action.type) {
        case 'reset':
            return initState
        case 'add':
            return { count: state.count+1}
        case 'multiply':
            return { count: state.count*3}
        default:
            return state
    }
}
export default function UseReducerComp() {
    const [ state, dispath ] = useReducer( reducer, initState )
    return (
        <div>
            <h2>useReducer</h2>
             <p>当前数量：{state.count}</p>
             <button onClick={()=>(dispath({type:'reset'}))}>重置</button>
             <button onClick={()=>(dispath({type:'add'}))}>加1</button>
             <button onClick={()=>(dispath({type:'multiply'}))}>乘3</button>
        </div>
    )
}

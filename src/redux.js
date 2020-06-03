import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { createStore  } from 'redux'

// 用于通过动作，创建新的state
//reducer有2个作用，1初始化数据，2就是通过获取动作，改变数据
const reducer = function( state={num:0},action) {
    switch (action.type) {
      case 'add':
        state.num++;
        break;
      case 'decrement':
        state.num--;
        break;
      default:
        return state
    }
    return {...state}  //相当于对象的copy
}
// 创建仓库
const store = createStore(reducer)
console.log(store)

function add(){
  // 通过仓库的方法dispatch进行修改数据
  store.dispatch({type:'add',content:{id:1,msg:'are you happy today?'}})
  console.log(store.getState())
}

function decrement(){
  // 通过仓库的方法dispatch进行修改数据
  store.dispatch({type:'decrement'})
  console.log(store.getState())
  
}


// 函数式计数器
const Counter = function( props){
  // console.log(store.getState())
  let state = store.getState()
  return(
    <div>
      <button onClick={add}>+</button>
      <div>
        {state.num}
      </div>
      <button onClick={decrement}>-</button>
    </div>
  )
}

ReactDOM.render(
    <Counter />,
  document.getElementById('root')
);


// subScribe用于监听更新状态
store.subscribe(()=>{
  ReactDOM.render(
    <Counter />,
  document.getElementById('root')
);
})
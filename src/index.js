 import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';


// 演示react-router的4.xx的版本
import RouterSample from './ReactRouter/RouterSample'
ReactDOM.render(
  <RouterSample></RouterSample>,
  document.getElementById('root')
)



/*
import { createStore ,applyMiddleware } from 'redux'
import {Provider,connect} from 'react-redux'

// redux累加器二
import FirstRedux from './Reduxfloder/FirstRedux'
import store2 from './Reduxfloder/store'

// 整合写法 第三种
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { firstReducer } from './Reduxfloder/count.redux'

const store3 = createStore(firstReducer,applyMiddleware( thunk, logger) )

ReactDOM.render(
  <Provider store={store3}>
    <FirstRedux />
  </Provider>,
    document.getElementById('root')
    );
  */
/*
class Counter extends React.Component{
  render(){
    console.log(this.props)
    // 计数，通过store的state传给props，直接通过props就可以将state的数据获取
    const value = this.props.value;
    // 将修改数据的事件或者方法传入props
    const onAddClick = this.props.onAddClick;
    const onAddClick5 = this.props.onAddClick5;
    return (
      <div>
        <h1>计数的数量：{value}</h1>
        <button onClick={onAddClick}>+1</button>
        <button onClick={onAddClick5}>+5</button>
      </div>
    )
  }
}


const addAction = {
  type:'add'
}

let ActionFnObj = {
  add:function(state,action){
    state.num ++
    return state 
  },
  addNum:function(state,action){
    state.num = state.num + action.num
    return state
  }
}


function reducer(state={num:0},action) {
  console.log(action.type)  //输出：@@redux/INITe.b.o.l.l.i
 if(action.type.indexOf('redux') === -1){
   state = ActionFnObj[action.type](state,action)
   return {...state}
 } else {
  return state
 }

}
// function reducer(state={num:0},action) {
//   switch (action.type) {
//     case 'add':
//       state.num++
//       break;
  
//     default:
//       break;
//   }
//   return {...state}

// }

// const store = createStore(reducer)

// 将state映射到props的函数  参数固定
function mapStateToProps(state){
  return {
    value: state.num
  }
}

// 将修改state数据的方法映射到props，默认会传入store里的dispatch方法  参数固定
function mapDispatchToProps(dispatch){
  return {
    onAddClick:()=>{dispatch(addAction)},
    onAddClick5:()=>{dispatch({type:'addNum',num:5})}
  }
}

// 将上面的2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件

const App = connect (
  mapStateToProps,
  mapDispatchToProps
)(Counter)

*/

// redux累加器1
/*
ReactDOM.render(<Provider store={store}><App /></Provider>,
document.getElementById('root')
);
*/


/*
// redux累加器2
const renderState = ()=>{
  ReactDOM.render(<FirstRedux />,
    document.getElementById('root')
    );
}
renderState()
store2.subscribe(renderState)
*/

/*
ReactDOM.render(
<Provider store={store2}>
  <FirstRedux />
</Provider>,
  document.getElementById('root')
  );
*/
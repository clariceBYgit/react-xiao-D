import React, { Component } from 'react'
// 引入store2
// import store2 from './store'
import { connect } from 'react-redux'
import {increment, decrement, asyncAdd} from './count.redux'

/*
// 返回数据的方法，供connect使用，帮我们把数据转换成props
const mapStateToProps = (state)=>{
    return {
        count:state
    }
}

// 返回dispatch方法的方法，供connect使用，帮我们把数据转换成props
const mapDispatchToProps = (dispatch)=>{
    return{
        increment : ()=>dispatch({type:'increment'}),
        decrement : ()=>dispatch({type:'decrement'})
    }
}


*/

// 装饰器模式
@connect(
    state =>({count:state}),
   /*
    // 写法一：
    dispatch=>({
        increment : ()=>dispatch({type:'increment'}),
        decrement : ()=>dispatch({type:'decrement'})
    })*/
    
    // 写法二
//    因为redux默认只支持同步写法，所以上面的返回dispatch的方法可以简写成下面的代码
   /* {
        increment : ()=>({type:'increment'}),
        decrement : ()=> ({type:'decrement'}),
        // 异步操作:使用中间件applyMiddleware,thunk 
        asyncAdd : ()=>dispatch=>{
            setTimeout(()=>{
                dispatch({type:'increment'})
            },2000

            )
        }
    }
    */

    // 写法三：整合后的写法
    {increment, decrement, asyncAdd}
)

class FirstRedux extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>学习redux，编写redux的累加器</h2>
                <div>
                    
                    {/* redux获取数据，用getState获取当前值，与dispatch方法的编写 */}
                    {/* <h3>数据累加，当前值：{store2.getState()}</h3>
                    <button onClick={()=>store2.dispatch({type:'increment'})}>+1</button>
                    <button onClick={()=>store2.dispatch({type:'decrement'})}>-1</button> */}

                </div>
                <h2>学习react-redux，编写redux的累加器</h2>
                <div>
                    
                    {/* redux获取数据，用getState获取当前值，与dispatch方法的编写 */}
                    <h3>数据累加，当前值：{this.props.count}</h3>
                    <button onClick={()=>this.props.increment()}>+1</button>
                    <button onClick={()=>this.props.decrement()}>-1</button>
                    <button onClick={()=>this.props.asyncAdd()}>延迟2秒+1</button>

                </div>

            </div>
        )
    }
}


export default  FirstRedux
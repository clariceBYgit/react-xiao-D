import React, { Component } from 'react'
import { increment,decrement,asyncDe } from './count.redux'
import { connect } from 'react-redux'
@connect(
    state=>({count:state}),
    { increment,decrement,asyncDe }
)
class FirstRedux extends Component {
    render() {
        return (
            <div>
                <p>当前数量：{this.props.count}</p>     
                <button onClick={()=>this.props.increment()}>加1</button> 
                <button onClick={()=>this.props.decrement()}>减1</button> 
                <button onClick={()=>this.props.asyncDe()}>延迟两秒减1</button> 
            </div>
        )
    }
}

export default  FirstRedux
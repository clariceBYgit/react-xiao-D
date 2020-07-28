import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * 路由：若使用this.props.history.push('/') 的方式，必须是直接子元素，若是孙子元素，则不能使用--------------> 也可以使用一下context的方式进行解决 或是 使用 withRouter队象
 */
 
const InFo = (props,context) => {
        return (
            // 数据读取
           <div>
               {context.color}
           </div>
        )
}
function ToolBar() {
    return (
        <div>
            <InFo></InFo>
        </div>
        )
    }
    export default class ContextTypeDemo extends Component {
        // getChildContext 是固定方法进行传值 
        getChildContext(){
            return{
                color:'red'
            }
        }
        render() {
            return (
                // 传递数据
                <div>
                    <ToolBar></ToolBar>
                    11111
                </div>
        )
    }
}

InFo.contextTypes = {
    color:PropTypes.string
}

ContextTypeDemo.childContextTypes = {
    color: PropTypes.string
}
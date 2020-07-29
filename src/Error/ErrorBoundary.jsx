import React, { Component } from 'react'
// 错误边界处理
export default class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state={
            hasError:false,
            error:null,
            errorInfo:null
        }
    }
    //用于子元素发生错误时触发
    componentDidCatch(error,errorInfo){
        this.setState({
            hasError:true,
            error,
            errorInfo

        })
    }
    render() {
      if( this.state.hasError ){
         return <div>{this.props.render(this.state.error,this.state.errorInfo)}</div>
      }
      return this.props.children
    }
}

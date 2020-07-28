// 使用高阶组件方式封装fetch请求并在Banner.jsx中使用
import React from 'react'

const withFetch = (url) => (View) => {
    return class extends React.Component{
        constructor(){
            super()
            this.state={
                loading: true,
                data:null 
            }
        }
        componentDidMount(){
            fetch(url)
            .then( res => res.json() )
            .then( data =>{
                this.setState({
                    loading: false,
                    data:data
                })
            } )
        }
        render(){
            if(this.state.loading){
                return(
                    <div>数据加载中</div>
                 )
            } else {
                return <View data={ this.state.data }></View>
            }  
          
        }
    }
}

export default withFetch
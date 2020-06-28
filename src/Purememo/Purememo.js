import React, { Component,PureComponent } from 'react'

 class Count extends Component {
   
    render() {
        console.log("我是条数")
        return (
            <div>
                条数：{this.props.count}
            </div>
        )
    }
}


 // 解决方案2.使用PureComponent去代替生命周期
// class Title extends PureComponent {
// //  class Title extends Component {
//      /*
//      // 解决方案1.使用shouldComponentUpdate 
//       shouldComponentUpdate(PreProps){
//         console.log('标题是否更新')
//         // 返回ture就是更新
//         return this.props.title !== PreProps.title
//     }
//      */
   
//     render() {
//         //当只是count变化时，count组件渲染，title也会重新渲染，影响性能
//         // 解决方案1.使用shouldComponentUpdate 
//         // 解决方案2.使用PureComponent
//         // 解决方案3.使用React.memo
//         console.log("标题")
//         return (
//             <div>
//                 标题：{this.props.title}
                
//             </div>
//         )
//     }
// }

// 解决方案3，使用React.memo
const Title = React.memo((props)=>{
    console.log("标题")
    return(
        <div>
            标题：{props.title}
        </div>
    )
})

export default class Purememo extends Component {
    constructor(){
        super()
        this.state={
            title: "易烊千玺",
            count:1
        }
        // 每2秒count +1   
    
        setInterval(()=>{
            this.setState({
                count:this.state.count+1
            })
        },2000)
    }
    render() {
        return (
            <div>
                <h2>PureComponent的演示</h2>
                <Title title={this.state.title}></Title>
                <Count count={this.state.count}></Count>
            </div>
        )
    }
}

import React, { Component } from 'react'

// 定义数据源
let store = {
    name:'biubiu'
}
// 创建上下文 ，将Provider 和 Consumer解构出来
const { Provider,Consumer} = React.createContext()

function Son(props) {
    return(
        <div>
           <GrandSon></GrandSon>
        </div>
    )
}

function GrandSon(props){
    return(
        <Consumer>
            {
                store => {
                    return ( 
                    <div>
                        姓名：{store.name}
                    </div>)
                }
            }
        </Consumer>
       
    )
}

export default class Context2 extends Component {
    render() {
        return (
            // 固定写法value传递
            <Provider value={store}>
                <Son></Son>
            </Provider>
         
        )
    }
}
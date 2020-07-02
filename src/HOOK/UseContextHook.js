/*  //Context的写法   需要结构出  Provider 和 Consumer 
import React from 'react'

let store = {
    brand:'MAC'
}
const { Provider, Consumer} = React.createContext()
function Son() {
    return(
        <Consumer>
           {
               store => (
                <div>
                标签：{store.brand}
                </div>
               )
           }
        </Consumer>
    )
}
export default function UseContext() {
    
    return (
        <Provider value={store}>
            <Son></Son>
        </Provider>
       
    )
}
*/

// 使用useContext  HOOK 进行改版编写

import React,{ useContext } from 'react'
// 在另一个子组件中使用
import UseContextChild from './UseContextChild'
// useContext是使用 React.createContext的返回值进行操作  省去了 Provider 和 Consumer
// 1. 使用方式一：当前组件内创建context队象(也可以将创建好的Context暴露出去，在子组件UseContextChild中引入，避免层层传递)
//  const Context = React.createContext({name:'边柏柏',age:'18岁',tel:'110110110'})
// 2. 使用方式二： 创建store 统一创建context对象后抛出，在所需的组件中引入
import { others } from './store'
export const Context = React.createContext({name:'边柏柏',age:'18岁',tel:'110110110'})
function Son(props) {
    return (
        <div>
            年龄：{props.age}
        </div>
    )
}
export default function UseContextHook() {
    const ctx = useContext(Context)
    const rest = useContext(others)
    return (
        <div>
            <h2>useContext</h2>
            <p>姓名：{ctx.name}</p>
            <Son age={ctx.age}></Son>
            <p>地址：{rest.address}</p>
            <UseContextChild></UseContextChild>
        </div>
    )
}

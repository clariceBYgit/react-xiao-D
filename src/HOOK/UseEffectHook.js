import React, { useEffect, useState } from 'react'
// useEffect用于处理副作用(数据获取，订阅，定时执行，手动修改React.Dom都是副作用)，相当于componentDidMount,componentDidUpdate,componentWillUnmount这三个生命周期



export default function UseEffectHook(){
    const [ count, setCount] = useState(0) 
    // 使用useEffect(callback,array)
    useEffect(()=>{
        // 处理副作用逻辑
        document.title=`点击了${count}次`
        // 可以返回一个函数，用作清理
        return ()=>{
            // 清理副作用需要清理的内容  类似于componentDidMount   组件渲染和组件卸载前执行的代码
            console.log('组件更新或卸载')
        }
    },[count])
    /* array的三种情况
    1.  传入空数组（与数组中传入常量一致）   只执行document一次  不执行return的
     2. 传入非空数组   useEffect会在数组发生变化后执行每次都执行(document和return同时执行)
     3.  不传入数组  每次渲染都会都执行（document和return同时执行)
    */
    return(
        <div>
           <h2>useEffect</h2> 
            <p>点击了{count}</p>
            <button onClick={()=>setCount(count<5?count+1:count)}>count小于5点击+1</button>
            <button onClick={()=>setCount(count+1)}>点击+1</button>
        </div>
    )
}
import React,{ useState } from 'react'

export default function UseStateHook() {
    // 注意是数组
    const [ count, setCount ] = useState(0)
    return (
        <div>
            <div>
                数量：{count}
            </div>
            <button onClick={()=>setCount(count+1)}>点击+1</button>
        </div>
    )
}

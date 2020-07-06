import React,{ useEffect , useRef, useState } from 'react'

export default function CustomHooks() {
    const [title,setTitle] = useState('原本的title')
    const useChangeTitle = ( title ) =>{
        useEffect(
            ()=>{
                document.title=title
            },[title])
    }
    useChangeTitle(title)
    const inputValue = useRef()
    const changeT = () => {
       const newTitle = inputValue.current.value
       return setTitle(newTitle)
        
    }
    return (
        <div>
            <h2>自定义的Hooks</h2>
            <input ref={inputValue} placeholder='请输入新的标题' />
            <button onClick={changeT}>点击确认修改标题</button>
        </div>
    )
}


import React,{ useEffect , useRef, useContext } from 'react'

const useChangeTitle = ( title ) =>{
    useEffect(
        ()=>{
            document.title=title
        },[title])
}

export default function CustomHooks() {
    const inputValue = useRef()
    const changeT = () => {
       const newTitle = inputValue.current.value
       return newTitle
        
    }
    return (
        <div>
            <h2>自定义的Hooks</h2>
            <input ref={inputValue} placeholder='请输入新的标题' />
            <button onClick={changeT}>点击确认修改标题</button>
        </div>
    )
}

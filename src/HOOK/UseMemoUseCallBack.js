import React,{ useMemo, useCallback, useRef} from 'react'

export default function UseMemoUseCallBack() {
    // useMemo
    const obj1 = {name:'小丁', age:'15岁'}
    const obj2 = { sex:'男'}
    const memoValue = useMemo( () => (Object.assign(obj1,obj2)),[obj1, obj2])
    // console.log(memoValue)  // {name: "小丁", age: "15岁", sex: "男"}
    // useCallback
    const memoCallBack = useCallback(
        () => (Object.assign(obj1,obj2))
        ,[obj1, obj2],
    )
    // console.log(memoCallBack) // () => Object.assign(obj1, obj2)
    // useRef
    const inputRef = useRef()
    const divRef = useRef()
    const getInput = ()=>{
    //     console.log(inputRef.current.value)
        // console.log(divRef)
        divRef.current.textContent = inputRef.current.value
        // divRef.current.style = {display:'block'}
    }

    return (
        <div>
            <h2>UseMemo</h2>
            <p>姓名： { memoValue.name}</p>
            <p> 年龄：{memoCallBack().age}</p>
            <h6>请输入爱好</h6>
            <input ref={inputRef} />
            <button onClick={getInput}>确定</button>
            <div ref={divRef} style={{width:'300px',height:'100px',border:'1px solid #dedede',margin:'10px 10px'}}>
               
            </div>
        </div>
    )
}

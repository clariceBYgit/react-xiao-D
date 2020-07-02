import React,{ useContext } from 'react'
import { Context } from './UseContextHook'
export default function UseContextChild() {
    const ctx = useContext(Context)
    return (
        <div>
            电话：{ctx.tel}
        </div>
    )
}

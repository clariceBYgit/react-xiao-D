import React, { Component } from 'react'

function Fh(props){
    return(
        <div>
            {/* 类似于Vue的匿名插槽 */}
            {props.children}
            {/* 类似于Vue的具名插槽 */}
            {props.name}
        </div>
    )
}
export default class Composition extends Component {
    render() {
        const Xh = (
            <div>
                小黄狗
            </div>
        )
        return (
            <div>
                <Fh name={Xh}>
                    <p>复合组件</p>

                </Fh>
            </div>
        )
    }
}

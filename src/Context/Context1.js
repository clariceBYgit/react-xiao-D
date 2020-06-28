import React, { Component } from 'react'
let store = {
    name:'biubiu'
}



function Son(props) {
    return(
        <div>
           <GrandSon  {...props}></GrandSon>
        </div>
    )
}

function GrandSon(props){
    return(
        <div>
            姓名：{props.name}
        </div>
    )
}
export default class Context1 extends Component {
    render() {
        return (
            <div>
                <Son name={store.name}></Son>
            </div>
        )
    }
}

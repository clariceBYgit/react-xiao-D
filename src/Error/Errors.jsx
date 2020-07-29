import React, { Component } from 'react'

export default class Errors extends Component {
    render() {
        return (
            <ul>

                {
                    null.map((item,index)=>{
                    return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
}

import React, { Component } from 'react'
import Errors from './Errors'
import ErrorBoundary from './ErrorBoundary'

export default class ErrorParent extends Component {
    render() {
        return (
            <div>
                <p>错误边界处理</p>
        <ErrorBoundary render={(error,errorInfo) => <p>{error.toString()}</p> }>
                    <Errors />
                </ErrorBoundary>
            </div>
        )
    }
}

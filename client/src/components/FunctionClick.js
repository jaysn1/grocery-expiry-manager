import React, { Component } from 'react'

export class FunctionClick extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
             message: 'Hello'
        }

        this.eventHandler = this.eventHandler.bind(this);
    }

    eventHandler() {
        this.setState({
            message: 'GoodBye!'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick = {this.eventHandler.bind(this)}>Click</button> */}
                {/* <button onClick = {() => this.eventHandler()}>Click</button> */}
                <button onClick = {this.eventHandler}>Click</button>
            </div>
        )
    }
}

export default FunctionClick

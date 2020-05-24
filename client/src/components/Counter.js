import React, { Component } from 'react';

class Counter extends Component{

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState( {
            count: this.state.count + 1
        })
    }
    decrement() {
        this.setState( prevState => ({
            count: this.state.count - 1
        }))
    }
    render() {
        return(
            <div>
                <h1>Subscribers: {this.state.count}</h1>
                <button onClick= {() => this.increment()}>Subscribe</button>
                <button onClick= {() => this.decrement()}>Unsubscribe</button>
            </div>
        )
    }
}

export default Counter;
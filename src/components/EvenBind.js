import React, { Component } from 'react';

class EvenBind extends Component {
    constructor(){
        super()
        this.state = {
            message: "Welcome Visitor"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {
        this.setState({
            message: "Goodbye Visitor !!"
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                 {/* // first approach, binding in render method. Has performance issues, so avoid using it. */}
                <button onClick={this.clickHandler.bind(this)}>Click Me</button> <br/>
                {/* // second approach. Arrow in render method */}
                <button onClick={() => this.clickHandler()}>Click Me</button> <br/>
                {/* // third approach . Most commonly used in big projects. Binding in constructor. */}
                <button onClick={this.clickHandler}>Click Me</button> 
            </div>
        );
    }
}

export default EvenBind;
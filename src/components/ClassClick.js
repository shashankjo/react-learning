import React, { Component } from 'react';

// class component
class ClassClick extends Component {
    clickHandler(){
        console.log('Button Click me clicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        );
    }
}

export default ClassClick;
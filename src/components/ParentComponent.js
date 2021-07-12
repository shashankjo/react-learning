import React from 'react';

import { Component } from 'react'
import { Childcomponent } from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }
    
    render() {
        return (
            <div>
                <Childcomponent greetHandler={this.greetParent} />
            </div>
        );
    }
}

export default ParentComponent;

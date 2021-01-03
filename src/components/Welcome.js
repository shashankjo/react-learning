import React, { Component } from 'react'

class Welcome extends Component{
    render() {
        const {name, heroName} = this.props
        // const {state1, state2} = this.state   
        // we dont have state in this component 
        //but syntax of destructuring state would look like this.
        return <h1> Class component {name} aka {heroName}</h1>
    }
}

export default Welcome
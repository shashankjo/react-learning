import React from 'react'

// function Greet() {
//  return <h1> Hello Shashank is learning React</h1>
// }

const Greet = (props) => {
    const {name, heroName, children} = props
    return (
        <div>
            <h1> Functional Component {name} aka {heroName}!!</h1>
            {children}
        </div>
    )
} 
export default Greet
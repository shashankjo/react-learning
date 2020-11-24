import React from 'react'

// function Greet() {
//  return <h1> Hello Shashank is learning React</h1>
// }

const Greet = (props) => {
    return (
        <div>
            <h1> Functional Component {props.name} aka {props.heroName}!!</h1>
            {props.children}
        </div>
    )
} 
export default Greet
import React from 'react'

// function Greet() {
//  return <h1> Hello Shashank is learning React</h1>
// }

const Greet = ({name, heroName, children}) => {
    return (
        <div>
            <h1> Functional Component {name} aka {heroName}!!</h1>
            {children}
        </div>
    )
} 
export default Greet
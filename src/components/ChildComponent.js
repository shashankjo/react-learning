import React from 'react'

export function Childcomponent(props) {
    

    return (
        <>
            <button onClick={props.greetHandler}> Greet Parent</button>
        </>
    )
}

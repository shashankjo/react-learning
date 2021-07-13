import React from 'react'

export function Namelist() {
    const names = [ 'Bruce', 'Clark', 'Diana']
    const namesList = names.map(name => <div> {name} </div>)

    return (
       <div> {namesList} </div>
    )
}

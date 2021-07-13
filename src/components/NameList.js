import React from 'react'

export function Namelist() {
    const persons = [ 
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
         },
         {
            id: 2,
            name: 'Clark',
            age: 31,
            skill: 'Angular'
         },
         {
            id: 3,
            name: 'Diana',
            age: 31,
            skill: 'Vue'
         } 
        ]
    const personList = persons.map(person => 
    <h2> I am {person.name}. I am {person.age} years old. I know {person.skill} </h2>)

    return (
       <div> {personList} </div>
    )
}

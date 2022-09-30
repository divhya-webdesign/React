import React from 'react'

function Person({person}){
    return(
        <div>
            <h2>I am {person.name}.Age {person.age}.House of {person.house} bleh</h2>
        </div>

    )
}

export default Person
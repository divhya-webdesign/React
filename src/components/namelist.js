import React from 'react'
import Person from './person'

function Namelist(){
    const names = [ 'harry', 'ron', 'hermionie']
    const namesList =  names.map(name => <h2>{name}</h2>)
    const persons= 
    [
    {
        id: 1,
        name: 'Harry',
        age: 23,
        house: 'gryffindor'
    },
    {
        id: 2,
        name: 'Ron',
        age: 23,
        house: 'gryffindor'
    },
    {
        id: 3,
        name: 'Hermionie',
        age: 23,
        house: 'gryffindor'
    }]

       
            const personList = persons.map(person => <Person key={person.id} person = {person}/>)
       
    return <div>{personList}</div>

}

export default Namelist
import React from 'react';

export const People = (props) => {
    const { persons, newFilter } = props;

    return persons.filter((person) => person.name.includes(newFilter)).map((person) => {
        return (
            <p key={person.name}>{person.name} : {person.number}</p>
        )
    })

}
import React, { useState } from 'react'
import './App.css'
import {People} from './components/people';
import {Filter} from './components/filter';
import { Form } from './components/form';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const formSubmit = (event) => {
    if (persons.filter((person) => person.name === newName).length > 0) {
      event.preventDefault();
      window.alert(`${newName} is already added to the phonebook`)
    } else {
      event.preventDefault();
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName('');
      setNewNumber('');
      setNewFilter('');
    }
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const newFilterHandler = (event) => {
    setNewFilter(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} newFilterHandler={newFilterHandler}/>
      <Form formSubmit={formSubmit} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <People persons={persons} newFilter={newFilter}/>
    </div>
  )
}

export default App
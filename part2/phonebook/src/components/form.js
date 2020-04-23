import React from 'react';

export const Form = (props) => {
    return (
        <form onSubmit={props.formSubmit}>
        <h2>Add a new #</h2>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange} />
          number: <input value={props.newNumber} onChange={props.handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
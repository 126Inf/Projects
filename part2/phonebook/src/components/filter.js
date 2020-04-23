import React from 'react';

export const Filter = (props) => {
    return (
        <div>
        filter: <input value={props.newFilter} onChange={props.newFilterHandler} />
      </div>
    )
}
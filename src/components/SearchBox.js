//Search area for app
//Demostrates uses of deconstructing a prop
//  and using the prop to send info back to
//  parent container so parent can change
//  state
import React from 'react';

const SearchBox = ({ searchChange }) => { 
  return (
    <div className ="pa2">
      <input
        className = "pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
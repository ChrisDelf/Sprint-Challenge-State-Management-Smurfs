import React, { useState } from 'react';

import { connect } from 'react-redux';

import { postData, updateSmurfs } from '../actions';


const AddSmurfForm = props => {
  const initialFormState = { id: null, name: '', age: '', height: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };

    setUser(updatedUser);
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();


        props.postData(user)
        props.updateSmurfs()
        setUser(initialFormState);

      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Age</label>
      <input
        type="text"
        name="age"
        value={user.age}
        onChange={handleInputChange}
      />
      <label>Height</label>
      <input
        type="text"
        name="height"
        value={user.height}
        onChange={handleInputChange}
      />

      <button>Add new user</button>
    </form>
  );
};

export default connect(
  null,
  { postData, updateSmurfs}
)(AddSmurfForm);

import React, { useState } from 'react';

const AddSmurfForm = props => {
  const initialFormState = { id: null, name: '', email: '', role: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };

    setUser(updatedUser);
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.addUser(user);
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
      <label>Email</label>
      <input
        type="text"
        name="age"
        value={user.email}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <input
        type="text"
        name="height"
        value={user.email}
        onChange={handleInputChange}
      />

      <button>Add new user</button>
    </form>
  );
};

export default AddSmurfForm;

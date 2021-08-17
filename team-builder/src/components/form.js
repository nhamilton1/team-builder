import React, { useState } from 'react'


const Form = (props) => {

  const [newMember, setNewMember] = useState({ username: "", email: "", role: "", })

  const handleChange= event => {
    setNewMember({...newMember, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.setUser([...props.user, newMember])
    resetForm(event)
  }

  const resetForm = event => {
    event.preventDefault();
    setNewMember({
      username: "",
      email: "",
      role: "",
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={newMember.username}
            onChange={handleChange}
          />
        </label>
        <label>
          email:
          <input
            type="text"
            name="email"
            value={newMember.email}
            onChange={handleChange}
          />
        </label>
        <label>
          role:
          <input
            type="text"
            name="role"
            value={newMember.role}
            onChange={handleChange}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default Form;

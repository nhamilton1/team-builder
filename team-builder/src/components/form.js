import React, { useState } from 'react'


const Form = (props) => {
  const { user ,setUser } = props
  const [newMember, setNewMember] = useState({ name: "", email: "", role: "", })

  const handleChange= event => {
    setNewMember({...newMember, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    setUser([...user, newMember])
    resetForm(event)
  }

  const resetForm = event => {
    event.preventDefault();
    setNewMember({
      name: "",
      email: "",
      role: "",
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newMember.name}
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

import React, { useState } from 'react'


const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

const Form = (props) => {
  const { user ,setUser } = props
  const [newMember, setNewMember] = useState(initialFormValues)

  const handleChange= event => {
    setNewMember({...newMember, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    setUser([...user, newMember])
    setNewMember(initialFormValues)
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

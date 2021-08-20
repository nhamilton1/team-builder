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
      <form className='form container' onSubmit={handleSubmit}>
        <div className='form-group inputs'>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newMember.name}
            placeholder="Type in your name"
            maxLength="50"
            onChange={handleChange}
          />
        </label>
        <label>
          email:
          <input
            type="text"
            name="email"
            placeholder="Type in your email"
            maxLength="50"
            value={newMember.email}
            onChange={handleChange}
          />
        </label>
        <label>Role:
          <select value={newMember.role} name="role" onChange={handleChange}>
            <option value=''>-- Select a Role --</option>
            <option value='Student'>Student</option>
            <option value='TL'>Team Lead</option>
            <option value='Instructor'>Instructor</option>
            <option value='Alumni'>Alumni</option>
          </select>
        </label>
        <button>Submit!</button>
        </div>
      </form>
  );
}

export default Form;

import React, { useState } from 'react'
import './App.css';

function App() {
  const [user, setUser] = useState({ username: "", email: "", role: "" })

  const handleChange= event => {
    setUser({...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefualt();
    console.log(user.username)
    console.log(user.email)
    console.log(user.role)
    setUser({ username: '', email: '', role: '' })
  }

  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          email:
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          role:
          <input
            type="text"
            name="role"
            value={user.role}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;

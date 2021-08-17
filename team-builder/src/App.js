import React, { useState } from 'react'
import './App.css';
import Form from './components/form'
import FromList from './components/FormList'

function App() {
  const [users, setUsers] = useState([{}, {}])

  return (
    <div className="App">
      <h1>Add Your Team Members</h1>
      <Form users={users} setUsers={setUsers}/>
      <FromList users={users}/>
    </div>
  );
}

export default App;

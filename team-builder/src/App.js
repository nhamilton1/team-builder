import React, { useState } from 'react'
import './App.css';
import Form from './components/Form'
import FromList from './components/FormList'

function App() {
  const [user, setUser] = useState([{}, {}])

  return (
    <div className="App">
      <h1>Add Your Team Members</h1>
      <Form user={user} setUser={setUser}/>
      <FromList user={user}/>
    </div>
  );
}

export default App;

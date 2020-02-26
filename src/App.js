import React, { useState } from 'react';
import Team from "./components/Team";
import Form from "./components/Form";
import './App.css';

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Steve Gary",
      email: "stgary0@gmail.com",
      role: "Student" 
    }
  ]);

  const addNewMember = nm => {
    const newMember = {
      id: Date.now(),
      name: nm.name,
      email: nm.email,
      role: nm.role
    };
    setMembers([
      ...members,
      newMember
    ]);
  }

  return (
    <div className="App">
      <h1>Our Team</h1>
      <Form addNewMember={addNewMember} />
      <Team member={members} />
    </div>
  );
}

export default App;

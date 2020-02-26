import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Team from "./components/Team";
import Form from "./components/Form";
import './App.css';

function App() {

  const [member, setMember] = useState([
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
    setMember([
      ...member,
      newMember
    ]);
  }

  return (
    <div className="App">
      <h1>Our Team</h1>
      <Form addNewMember={addNewMember} />
      <Team member={member} />
    </div>
  );
}

export default App;

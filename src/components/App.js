import React, { useState } from 'react'
// import { v4 as uuid } from 'uuid'

import Form from './Form';
import List from './List';

const initialMembersList = [
  {
    id: Date.now(),
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Student'
  },
]

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

export default function App() {

  const [members, setMembers] = useState(initialMembersList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onSubmit = e => {
    e.preventDefault()
    if (
      !formValues.username.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
      ) { return }
    const newMember = { ...formValues, id: Date.now() }
    setMembers([ newMember, ...members ])
    setFormValues(initialFormValues)
  }

  const onInputChange = e => {
    const { name } = e.target
    const { value } = e.target
    setFormValues({ ...formValues, [ name ]: value })
  }

  return (
    <div>
      <Form
        value={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      {
        members.map(member => {
          return (
            <List key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

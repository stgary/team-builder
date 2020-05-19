import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Form from './Form';
import List from './List';

const initialMembersList = [
  {
    id: uuid(),
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
  return (
    <div>
      <Form />
      <List />
    </div>
  );
}

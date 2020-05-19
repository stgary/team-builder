import React from 'react';

export default function Form(props) {
  const {
    values,
    onInputChange,
    onSubmit
  } = props
        
  return (
    <form className='form container' onSubmit={onSubmit}>

      <div className='form-group submit'>
        <h2>Add a Member</h2>
        <button>submit</button>
      </div>

      <div className='form-inputs'>
        <h4>General information</h4>

        <label>Username:&nbsp;
          <input
            type='text'
            placeholder='Type a username'
            maxLength='20'
            name='username'
            value={values.username}
            onChange={onInputChange}
          />
        </label>

        <label>Email:&nbsp;
          <input
            type='text'
            placeholder='Type email'
            maxLength='20'
            name='email'
            value={values.email}
            onChange={onInputChange}
          />
        </label>

        <label>Role:&nbsp;
          <select name='role' value={values.role} onChange={onInputChange}>
              <option value='' >Select a Role</option>
              <option value='Student'>Student</option>
              <option value='Instructor'>Instructor</option>
              <option value='Alumni'>Alumni</option>
              <option value='TL'>TL</option>
          </select>
        </label>

      </div>
    </form>
  );
}

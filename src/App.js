import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (e) => setFirstName(e.target.value);

  const handleLastNameChange = (e) => setLastName(e.target.value);
  return (
    <div className='container'>
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        <input type="text" onChange={handleFirstNameChange} placeholder='Please key first name' />
        <br />
        <input type="text" onChange={handleLastNameChange} placeholder='Please key last name' />
        <br />
        firstName: {firstName}
        <br />
        lastName: {lastName}
        <hr />
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;

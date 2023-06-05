import React, { useState } from 'react';

const Addinput = () => {
  const [userInput, setUserInput] = useState({
    email: '',
    phone: '',
    password: '',
  });
  const [user, setUser] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setUser([...user, userInput]);
    setUserInput({ email: '', phone: '', password: '' });
  };

  console.log('user', user);

  return (
    <div className='flex flex-col m-auto w-1/3 gap-y-5' onClick={handlesubmit}>
      <input
        type='text'
        placeholder='Add email'
        className='border-4 p-2 mr-2'
        name='email'
        value={userInput.email}
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='Add password'
        className='border-4 p-2 mr-2'
        name='password'
        value={userInput.password}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Add phone'
        className='border-4 p-2 mr-2'
        name='phone'
        value={userInput.phone}
        onChange={handleChange}
      />
      <button className='text-2xl text-red-500 border-4 p-2 bg-stone-300'>
        {' '}
        Add
      </button>
    </div>
  );
};

export default Addinput;

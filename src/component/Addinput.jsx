import React, { useState } from 'react';
import ListofUsers from './ListofUsers';
import { toast } from 'react-toastify';

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
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userInput.email === '' ||
      userInput.phone === '' ||
      userInput.password === ''
    ) {
      //   toast.error('Please fill all the fields');
      //   return;
      return alert('Please fill all the fields');
    }

    setUser([...user, userInput]);
    setUserInput({ email: '', phone: '', password: '' });
  };

  console.log('user', user);

  return (
    <form
      className='flex flex-col m-auto w-1/3 gap-y-5'
      onSubmit={handleSubmit}
    >
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
      <button
        className='text-2xl text-red-500 border-4 p-2 bg-stone-300'
        type='submit'
      >
        {' '}
        Add
      </button>
      <ListofUsers user={user} />
    </form>
  );
};

export default Addinput;

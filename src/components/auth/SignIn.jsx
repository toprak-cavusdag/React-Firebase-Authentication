import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const signIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='sign-in-container w-full'>
      <form
        onSubmit={signIn}
        className='w-full h-full flex justify-center flex-col px-32'
      >
        <h1>Log In</h1>
        <input
          className='p-2 bg-slate-50 border border-sky-500 rounded-lg '
          type='email'
          placeholder='please enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className='p-2 bg-slate-50 border border-sky-500 rounded-lg '
          type='password'
          placeholder='enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='flex justify-center py-5'>
          <button
            type='submit'
            className='border border-sky-500 text-sky-500  rounded-full px-7 py-2 hover:bg-sky-500 hover:text-white duration-300'
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

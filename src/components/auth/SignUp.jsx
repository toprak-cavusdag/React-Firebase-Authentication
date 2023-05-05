import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [errorLog, setErrorLog] = useState('');

  const userSaver = (event) => {
    event.preventDefault();

    if (email === '') {
      setEmailError(true);
      setErrorLog('Please do not leave the e-mail field blank');
      return;
    }

    if (!email.includes('moomoo.games')) {
      setEmailError(true);
      setErrorLog('Please try to login with a @moomoo.games email');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setErrorLog(false);
        setEmailError(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='sign-in-container w-full'>
      <form
        onSubmit={userSaver}
        className='w-full h-full flex justify-center flex-col px-32'
      >
        <h1 className='text-xl font-bold my-3'>Create Account </h1>
        <input
          className={`p-2 bg-slate-50 border border-sky-500 rounded-lg  ${
            emailError ? 'border-red-500' : ''
          }`}
          type='email'
          placeholder='Please enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className='text-red-500 text-center p-2 text-xs font-semibold'>
          {errorLog}
        </p>
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
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

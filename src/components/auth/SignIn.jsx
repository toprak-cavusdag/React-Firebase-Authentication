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
    <div className='sign-in-container'>
      <form onSubmit={signIn}>
        <h1>Log In</h1>
        <input
          type='email'
          placeholder='please enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type='password'
          placeholder='enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
};

export default SignIn;

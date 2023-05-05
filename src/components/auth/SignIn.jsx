import React, { useState } from 'react';

const SignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className='sign-in-container'>
      <form>
        <h1>Log In</h1>
        <input
          type='email'
          placeholder='please enter your email'
          value={email}
        />
        <input
          type='password'
          placeholder='enter your password'
          value={password}
        />
      </form>
    </div>
  );
};

export default SignIn;

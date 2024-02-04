import React from 'react';

const SignUp = () => {
  return (
    <form>
      <input type='text' placeholder='User Name' />
      <input type='email' placeholder='User Email' />
      <input type='password' placeholder='User Password' />
      <button>Sign Up</button>
    </form>
  );
};

export default SignUp;

import React from 'react';

const Login = () => {
  return (
    <form>
      <input type='email' placeholder='User Email' className='border-2' />
      <input type='password' placeholder='User Password' className='border-2' />
      <button>Log In</button>
    </form>
  );
};

export default Login;

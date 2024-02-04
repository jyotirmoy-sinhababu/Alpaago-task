import React from 'react';

const Login = () => {
  return (
    <form className='flex flex-col gap-8'>
      <input
        type='email'
        placeholder='User Email'
        className='border-2 h-[55px] px-[10px] w-[520px]'
      />
      <input
        type='password'
        placeholder='User Password'
        className='border-2 h-[55px] px-[10px] w-[520px]'
      />
      <button className='w-[212px] border-2 h-[55px] flex justify-center items-center'>
        Log In
      </button>
    </form>
  );
};

export default Login;

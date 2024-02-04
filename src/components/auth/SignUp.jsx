import React, { useState } from 'react';

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className='flex flex-col gap-8'>
      <div className='flex flex-col gap-8'>
        <input
          type='text'
          placeholder='User Name'
          className='border-2 h-[55px] px-[10px]'
        />
        <input
          type='email'
          placeholder='User Email'
          className='border-2 h-[55px] px-[10px]'
        />
      </div>

      <div className='w-[520px] border-2   '>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='User Password'
          className='w-[490px] h-[55px] px-[10px]'
        />
        <button
          type='button'
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className=''
        >
          {!showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </button>
      </div>
      <button className='w-[212px] border-2 h-[55px] flex justify-center items-center'>
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;

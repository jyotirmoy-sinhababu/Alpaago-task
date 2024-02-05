import React, { useState } from 'react';

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import useSignUpWithEmailPassword from '../../hooks/useSignUpWithEmailPassword';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const { isLoading, signUp, error } = useSignUpWithEmailPassword();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signUp(inputs);
      }}
      className='flex flex-col gap-8'
    >
      <div className='flex flex-col gap-8'>
        <input
          type='text'
          placeholder='Full Name'
          className='border-2 h-[55px] px-[10px]'
          onChange={(e) => {
            setInputs({ ...inputs, userName: e.target.value });
          }}
        />
        <input
          type='email'
          placeholder='User Email'
          className='border-2 h-[55px] px-[10px]'
          onChange={(e) => {
            setInputs({ ...inputs, email: e.target.value }); 
          }}
        />
      </div>

      <div className='w-[520px] border-2   '>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='User Password'
          className='w-[490px] h-[55px] px-[10px]'
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
          }}
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
      <button
        type='submit'
        className='w-[212px] border-2 h-[55px] flex justify-center items-center'
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;

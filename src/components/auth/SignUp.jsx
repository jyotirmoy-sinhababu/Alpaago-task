import React, { useState } from 'react';

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form>
      <input type='text' placeholder='User Name' className='border-2' />
      <input type='email' placeholder='User Email' className='border-2' />
      <div>
        <input
          type='password'
          placeholder='User Password'
          className='border-2'
        />
        <button
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </button>
      </div>
      <button>Sign Up</button>
    </form>
  );
};

export default SignUp;

import { useState } from 'react';

import useLogin from '../../hooks/useLogin';

const Login = () => {
  const { loading, error, loginUser } = useLogin();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        loginUser(inputs);
      }}
      className='flex flex-col gap-8'
    >
      <input
        type='email'
        placeholder='User Email'
        className='border-2 h-[55px] px-[10px] w-[520px]'
        onChange={(e) => {
          setInputs({ ...inputs, email: e.target.value });
        }}
      />
      <input
        type='password'
        placeholder='User Password'
        className='border-2 h-[55px] px-[10px] w-[520px]'
        onChange={(e) => {
          setInputs({ ...inputs, password: e.target.value });
        }}
      />
      <button
        type='submit'
        className='w-[212px] border-2 h-[55px] flex justify-center items-center'
      >
        Log In
      </button>
    </form>
  );
};

export default Login;

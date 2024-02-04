import { useState } from 'react';

import dividerImg from '../../assets/images/divider.svg';

import Logo from '../logo/Logo';
import Login from './Login';
import SignUp from './SignUp';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className='flex flex-col gap-8 justify-center items-center '>
      <div className='flex flex-col gap-8'>
        <Logo />
        {isLogin ? <Login /> : <SignUp />}
        <img src={dividerImg} alt='----o-----' />
      </div>

      <div className='flex'>
        <div className='flex justify-center'>
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </p>
        </div>
        <div
          onClick={() => {
            setIsLogin(!isLogin);
          }}
          className='cursor-pointer'
        >
          <p>{isLogin ? 'Sign Up' : 'Log In'}</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;

import { useState } from 'react';

import dividerImg from '../../assets/images/divider.svg';

import Logo from '../logo/Logo';
import Login from './Login';
import SignUp from './SignUp';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <div>
        <Logo />
        {isLogin ? <Login /> : <SignUp />}
      </div>
      <div>
        <img src={dividerImg} alt='----o-----' />
      </div>
      <div className='flex'>
        <div>
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

import { useState } from 'react';
import Logo from '../logo/Logo';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <div>
        <Logo />
        
      </div>
      <div></div>
    </div>
  );
};

export default Auth;

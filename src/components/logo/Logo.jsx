import React from 'react';
import logoImg from '../../assets/images/logo.png';

const Logo = () => {
  return (
    <div className='flex justify-center items-center'>
      <img src={logoImg} alt='logo' className='w-[35px] h-[35px]  gap-[20px]' />
      <p className='text-xl font-medium text-zinc-800 font-fontStyle'>
        Alpaago Task
      </p>
    </div>
  );
};

export default Logo;

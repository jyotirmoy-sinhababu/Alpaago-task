import React from 'react';
import Logo from '../logo/Logo';

import useLogOut from '../../hooks/useLogOut';

const NavBar = () => {
  const { handleLogout, isLoggingOut, error } = useLogOut();
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-500 h-[70px] flex justify-around w-[830px] rounded-lg items-center'>
      <Logo />
      <button
        className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default NavBar;

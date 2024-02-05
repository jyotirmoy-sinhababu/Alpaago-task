import React from 'react';

import useLogOut from '../../hooks/useLogOut';

const NavBar = () => {
  const { handleLogout, isLoggingOut, error } = useLogOut();
  return (
    <div>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default NavBar;

import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './page/homePage/HomePage';
import AuthPage from './page/authPage/AuthPage';

import { useSelector } from 'react-redux';

function App() {
  const authUser = useSelector((state) => state.auth.user) || '';
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='auth' element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;

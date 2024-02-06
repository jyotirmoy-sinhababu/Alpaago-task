import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './page/homePage/HomePage';
import AuthPage from './page/authPage/AuthPage';

import { useSelector } from 'react-redux';

function App() {
  const authUser = useSelector((state) => state.auth.user) || '';
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={authUser ? <HomePage /> : <Navigate to='/auth' />}
        />
        <Route
          path='auth'
          element={!authUser ? <AuthPage /> : <Navigate to='/' />}
        />
      </Routes>
    </>
  );
}

export default App;

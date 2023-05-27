import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage/LoginPage';

export const App:React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={'/login'} element={<LoginPage />}/>
      </Routes>
    </>
  )
}

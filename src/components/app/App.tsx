import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '@pages/LoginPage/LoginPage';
import { ROUTES } from '@src/constants';
import { MessengerPage } from '@src/pages/MessengerPage/MessengerPage';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/store';
import { AppProtectedRoute } from '../app-protected-route/AppProtectedRoute';

export const App:React.FC = () => {
  const isAuth = useSelector((state:RootState) => state.isAuth.isAuth);

  return (
    <>
      <Routes>
        <Route path={ROUTES.signIn.path} element={<LoginPage/>} />
        <Route path={ROUTES.messenger.path} element={
          <AppProtectedRoute isAuth={isAuth}>
            <MessengerPage/>
          </AppProtectedRoute>
        }/>
        <Route path='/*' element={
          <AppProtectedRoute isAuth={isAuth}>
            <MessengerPage/>
          </AppProtectedRoute>
        }/>
      </Routes>
    </>
  )
}

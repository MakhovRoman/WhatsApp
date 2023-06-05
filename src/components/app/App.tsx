import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '@pages/LoginPage/LoginPage';
import { ROUTES } from '@src/constants';
import { MessengerPage } from '@src/pages/MessengerPage/MessengerPage';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/store';
import { ProtectedRoute } from '@components/protected-route/ProtectedRoute';
import { AuthPagesRoute } from '@components/auth-pages-route/AuthPagesRoute';

export const App:React.FC = () => {
  const isAuth = useSelector((state:RootState) => state.user.isAuth);

  return (
    <>
      <Routes>
        <Route element={<AuthPagesRoute />}>
          <Route path={ROUTES.signIn.path} element={<LoginPage/>} />
        </Route>
        <Route path={ROUTES.messenger.path} element={
          <ProtectedRoute isAuth={isAuth}>
            <MessengerPage/>
          </ProtectedRoute>
        }/>
        <Route path='/*' element={
          <ProtectedRoute isAuth={isAuth}>
            <MessengerPage/>
          </ProtectedRoute>
        }/>
      </Routes>
    </>
  )
}

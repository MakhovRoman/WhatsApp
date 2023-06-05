import { ROUTES } from '@src/constants';
import { RootState } from '@src/store/store';

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Loader } from '@components/Loader/Loader';

export const AuthPagesRoute = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const isLoading = useSelector((state:RootState) => state.user.isLoading);

  return (
    isAuth ?
    (isLoading ?
      <Loader />
      :
      <Navigate to={ROUTES.messenger.path} replace/>
      )
      :
    (<Outlet />)
  )
}

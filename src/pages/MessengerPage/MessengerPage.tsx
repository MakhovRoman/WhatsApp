import { Button } from '@mui/material';
import authSlice, { logout } from '@src/store/slices/authSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

export const MessengerPage:React.FC = () => {
  const dispatch = useDispatch();
  const handlerLogout = () => {
    dispatch(logout(false));
  }

  return (
    <main>
      Messenger
      <Button
        variant='contained'
        onClick={handlerLogout}
      >LOGOUT</Button>
    </main>
  )
}

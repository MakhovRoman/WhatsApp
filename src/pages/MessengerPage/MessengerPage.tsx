import { Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Loader } from '@src/components/Loader/Loader';
import { MessengerAside } from '@src/components/messenger-aside/MessengerAside';
import { MessengerMain } from '@src/components/messenger-main/MessengerMain';
import { logout } from '@src/store/slices/authSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

export const MessengerPage:React.FC = () => {
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(logout());
  }

  return (
    <>
      <Grid2
        container
          sx={{
            height: '100vh'
          }}
        >
        <Grid2 xs={4}>
          <MessengerAside />
        </Grid2>
        <Grid2 xs={8}>
          <MessengerMain />
        </Grid2>
      </Grid2>
      {/* <div>
        Messenger
        <Button
          variant='contained'
          onClick={handlerLogout}
        >LOGOUT</Button>
      </div> */}


    </>
  )
}

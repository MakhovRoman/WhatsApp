import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { MessengerAside } from '@src/components/messenger-aside/MessengerAside';
import { MessengerMain } from '@src/components/messenger-main/MessengerMain';
import React from 'react';


export const MessengerPage:React.FC = () => {
  // const dispatch = useDispatch();

  // const handlerLogout = () => {
  //   dispatch(logout());
  // }

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

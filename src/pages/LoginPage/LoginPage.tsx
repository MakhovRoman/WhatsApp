import { Button, TextField } from '@mui/material';
import React, { Dispatch, useState } from 'react';

import styles from './LoginPage.module.scss';

import { authThunks } from '@src/store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/main';

type TInputEvent = React.ChangeEvent<HTMLInputElement>;

export const LoginPage:React.FC = () => {
  const [id, setId] = useState('');
  const [token, setToken] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleInput = (
    event: TInputEvent,
    callback: Dispatch<React.SetStateAction<string>>
  ) => {
    callback(event.target.value);
  };

  const handleSubmit = async() => {
    const authData = {
      id,
      token
    }

    dispatch(authThunks.login(authData));
  }

  return (
    <section className={styles.loginPage_wrapper}>
      <form className={styles.form}>
        <TextField
          id="idInstance"
          label="idInstance"
          variant="outlined"
          value={id}
          onChange={(event: TInputEvent) => handleInput(event, setId)}
        />
        <TextField
          id="apiTokenInstance"
          label="apiTokenInstance"
          variant="outlined"
          value={token}
          onChange={(event: TInputEvent) => handleInput(event, setToken)}
        />
        <Button
          variant='contained'
          onClick={handleSubmit}
        >Login</Button>
      </form>
    </section>
  )
}

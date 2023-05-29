import { Button, TextField } from '@mui/material';
import React, { Dispatch, useState } from 'react';

import styles from './LoginPage.module.scss';

import axios from 'axios';
import { authThunks, login } from '@src/store/slices/authSlice';
import { useDispatch } from 'react-redux';

type TInputEvent = React.ChangeEvent<HTMLInputElement>;

export const LoginPage:React.FC = () => {
  const [id, setId] = useState('');
  const [token, setToken] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handleInput = (
    event: TInputEvent,
    callback: Dispatch<React.SetStateAction<string>>
  ) => {
    callback(event.target.value);
  };
  const handleSubmit = async() => {
    const data = {
      id,
      token
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(authThunks.login(data));
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
        <TextField
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          onChange={(event: TInputEvent) => handleInput(event, setPhone)}
        />
        <Button
          variant='contained'
          onClick={handleSubmit}
        >Login</Button>
      </form>
    </section>
  )
}

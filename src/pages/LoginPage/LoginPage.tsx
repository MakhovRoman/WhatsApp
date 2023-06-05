import { Button, TextField } from '@mui/material';
import React, { Dispatch, useState } from 'react';

import styles from './LoginPage.module.scss';

import { authThunks } from '@src/store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@src/main';
import { RootState } from '@src/store/store';
import { Loader } from '@src/components/Loader/Loader';

type TInputEvent = React.ChangeEvent<HTMLInputElement>;

export const LoginPage = () => {
  const [idInstance, setId] = useState('');
  const [apiTokenInstance, setToken] = useState('');

  const isLoading = useSelector((state:RootState) => state.user.isLoading)

  const dispatch = useDispatch<AppDispatch>();

  const handleInput = (
    event: TInputEvent,
    callback: Dispatch<React.SetStateAction<string>>
  ) => {
    callback(event.target.value);
  };

  const handleSubmit = async() => {
    const authData = {
      idInstance,
      apiTokenInstance
    }

    dispatch(authThunks.login(authData));
  }

  return (
    <>
      {isLoading ?
      <Loader />
      :
      <section className={styles.loginPage_wrapper}>
        <form className={styles.form}>
          <TextField
            id="idInstance"
            label="idInstance"
            variant="outlined"
            value={idInstance}
            onChange={(event: TInputEvent) => handleInput(event, setId)}
          />
          <TextField
            id="apiTokenInstance"
            label="apiTokenInstance"
            variant="outlined"
            value={apiTokenInstance}
            onChange={(event: TInputEvent) => handleInput(event, setToken)}
          />
          <Button
            variant='contained'
            onClick={handleSubmit}
          >Login</Button>
        </form>
      </section>}
    </>

  )
}

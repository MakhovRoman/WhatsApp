import { Button, TextField } from '@mui/material';
import React, { Dispatch, useState } from 'react';

import styles from './LoginPage.module.scss';

type TInputEvent = React.ChangeEvent<HTMLInputElement>;

export const LoginPage:React.FC = () => {
  const [id, setId] = useState('');
  const [token, setToken] = useState('');
  const [phone, setPhone] = useState('');

  const handleInput = (
    event: TInputEvent,
    callback: Dispatch<React.SetStateAction<string>>
  ) => {
    callback(event.target.value);
  };
  const handleSubmit = async() => {
    console.log(id, token);
    const response = await fetch(`https://api.green-api.com/waInstance${id}/GET/${token}`)
    console.log(response);
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

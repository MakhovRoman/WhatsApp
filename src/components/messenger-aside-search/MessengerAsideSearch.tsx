import { ChangeEvent, useState } from 'react';
import styles from './MessengerAsideSearch.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { addChat } from '@src/store/slices/chatsSlice';
import { useDispatch } from 'react-redux';

type FormValue = {
  addNewChat: string
}

export const MessengerAsideSearch = () => {
  // const [search, setSearch] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm<FormValue>();
  const dispatch = useDispatch();

  // const handlerSearch = (event: ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setSearch(value);
  // }

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    console.log(data);
    dispatch(addChat(data.addNewChat));
    reset();
  };

  return (
    <div className={styles.searchWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Новый чат"
          {
            ...register("addNewChat", {
              required: "Поле не может быть пустым",
              pattern: {
                value: /^[+]?[0-9]{10,15}$/,
                message: 'от 10 до 15 знаков (цифры), можно начать с "+"'
              }
            })
          }
          title="Новый чат"
          // value={search}
          // onChange={handlerSearch}
        />
        <div className={styles.error}>
          {errors.addNewChat &&
            <p>{errors.addNewChat.message || "Error!"}</p>
          }
        </div>
      </form>
    </div>
  )
}

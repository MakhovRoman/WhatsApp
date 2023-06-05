import clsx from 'clsx';
import React from 'react';
import styles from './MessengerMain.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/store';
import { MessageArea } from '../message-area/MessageArea';
import { MessageSend } from '../message-send/MessageSend';

export const MessengerMain:React.FC = () => {
  const currentChat = useSelector((state: RootState) => state.chat.currentChat);

  return (
    <main className={clsx(
      styles.messengerMain,
      'messengerWrapper',
      currentChat && styles.messengerMain_active
    )}>
      {currentChat ?
        <div className={styles.messengerContent}>
          <MessageArea />
          <MessageSend />
        </div>
        :
        <div className={styles.messenger_intro}>Выберите чат</div>
      }
    </main>
  )
}

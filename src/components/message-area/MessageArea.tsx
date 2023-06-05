import { RootState } from '@src/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './MessageArea.module.scss';
import { Message } from '../message-item/MessageItem';


export const MessageArea:React.FC = () => {
  const currentChat = useSelector((state:RootState) => state.chat.currentChat);
  const currentChatHistory = useSelector((state:RootState) => state.chat.currentChatHistory)

  return (
    <div className={styles.messageArea}>
      {currentChat ?
      currentChatHistory.map((item, index) =>
        <Message
          textMessage={item.textMessage}
          key={index}
          type={item.type}
        />
      ).reverse()
      :
      <div className={styles.messenger_intro}>Выберите чат</div>
      }
    </div>
  )
}

import { useDispatch, useSelector } from 'react-redux';
import styles from './MessengerChatLIst.module.scss';
import { RootState } from '@src/store/store';
import { MessengerChatItem } from '../messenger-chat-item/MessengerChatItem';
import { chatAPI } from '@src/services/API/chatAPI';
import { useState } from 'react';
import { chatThunks, setCurrentChat } from '@src/store/slices/chatsSlice';
import { AddChatIdPostffics } from '@src/utils/addChatIdPreffics';
import { AppDispatch } from '@src/main';

export const MessengerChatList = () => {
  const userData = useSelector((state:RootState) => state.user.data);
  const chatList = useSelector((state:RootState) => state.chat.list);
  const currentChat = useSelector((state:RootState) => state.chat.currentChat);
  const dispatch = useDispatch<AppDispatch>();

  const [isActive, setIsActive] = useState('');

  console.log(userData)

  const handleSetActiveChat = (id:string) => {
    setIsActive(id);
    currentChat !== id && dispatch(setCurrentChat(id));

    dispatch(chatThunks.getCurrentChatHistory({
      userData: {
        idInstance: userData.idInstance!,
        apiTokenInstance: userData.apiTokenInstance!
      },
      chatData: {
        chatId: AddChatIdPostffics(id),
        count: 20
      }
    }))
  }

  const sendMessage = async() => {
    const result = await chatAPI.send({
      sendMessage: {
        message: 'fffffff',
        chatId: '89881039825@c.us'
      },
      userData: {
        idInstance: userData.idInstance!,
        apiTokenInstance: userData.apiTokenInstance!
      }
    });

    console.log(result);
  }

  console.log(chatList);

  return (
    <div className={styles.chatList}>
      {Object.entries(chatList).map(
        (item, index) => (
          <MessengerChatItem
            chatId={item[0]}
            key={index}
            onClick={handleSetActiveChat}
            class={isActive===item[0] ? "chatItem_active" : ""}
          />
        )
      )}
    </div>
  )
}

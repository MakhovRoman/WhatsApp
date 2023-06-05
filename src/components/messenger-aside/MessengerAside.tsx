import React from 'react';
import styles from './MessengerAside.module.scss';
import clsx from 'clsx';
import { MessengerAsideHeader } from '@components/messenger-aside-header/MessengerAsideHeader';
import { MessengerAsideSearch } from '../messenger-aside-search/MessengerAsideSearch';
import { MessengerChatList } from '../messenger-chat-list/MessengerChatList';

export const MessengerAside:React.FC = () => {
  return (
    <aside className={clsx(styles.messengerAside, 'messengerWrapper')}>
      <MessengerAsideHeader/>
      <MessengerAsideSearch />
      <MessengerChatList />
    </aside>
  )
}

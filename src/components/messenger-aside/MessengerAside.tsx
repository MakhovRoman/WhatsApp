import React from 'react';
import styles from './MessengerAside.module.scss';
import clsx from 'clsx';
import { MessengerAsideHeader } from '@components/messenger-aside-header/MessengerAsideHeader';

export const MessengerAside:React.FC = () => {
  return (
    <aside className={clsx(styles.messengerAside, 'messengerWrapper')}>
      <MessengerAsideHeader/>
    </aside>
  )
}

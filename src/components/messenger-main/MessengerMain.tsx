import clsx from 'clsx';
import React from 'react';
import styles from './MessengerMain.module.scss';

export const MessengerMain:React.FC = () => {
  return (
    <main className={clsx(styles.messengerMain, 'messengerWrapper')}>
      <div className={styles.messenger_intro}>Выберите чат</div>
    </main>
  )
}

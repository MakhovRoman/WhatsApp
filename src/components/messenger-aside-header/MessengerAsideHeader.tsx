import clsx from 'clsx';
import styles from './MessengerAsideHeader.module.scss';

export const MessengerAsideHeader = () => {
  return (
    <div className={styles.messengerAsideHeader}>
      <div className={clsx(styles.imageWrapper, 'messengerContent')}>
        <img src="/assets/avatar.png" alt="avatar" />
      </div>
      <h3>You</h3>
    </div>
  )
}

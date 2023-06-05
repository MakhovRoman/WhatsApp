import React from 'react';
import styles from './MessageSend.module.scss';

export const MessageSend: React.FC = () => {
  const initState = 'Введите сообщение';

  const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.textContent = '';
  }

  const handleOnBlur = (event: React.FocusEvent<HTMLElement>) => {
    if(event.currentTarget.textContent == '') {
      event.currentTarget.textContent = initState;
    }
  }

  return (
    <div className={styles.messageSend}>
      <span
        suppressContentEditableWarning={true}
        contentEditable={true}
        onClick={handleOnClick}
        onBlur={handleOnBlur}
      >
          Введите сообщение
        </span>
    </div>
  )
}

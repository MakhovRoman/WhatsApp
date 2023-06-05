import React from "react"
import styles from './MessageItem.module.scss'
import clsx from "clsx"

export enum TMessageType {
  out = 'outgoing',
  in = 'incoming'
}

type TMessageProps = {
  type: TMessageType,
  textMessage: string
}

export const Message: React.FC<TMessageProps> = (props) => {
  return (
    <div className={styles.messageRow}>
      <div className={clsx(
        styles.messageItem,
        props.type === TMessageType.in ? styles.messageItem_incoming : styles.messageItem_outgoing,
      )}>
        {props.textMessage}
      </div>
    </div>
  )
}

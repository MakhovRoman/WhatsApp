import { TUserData } from "@src/store/slices/authSlice"
import styles from './MessengerChatItem.module.scss';
import clsx from "clsx";
import { MouseEventHandler } from "react";

type TChatItemProps = {
  userData?: TUserData,
  chatId: string,
  class?: string,
  onClick: (id:string) => void
}

export const MessengerChatItem = (props: TChatItemProps) => {

  return (
    <div
      className={clsx([styles.chatItem, props.class])}
      onClick={() => props.onClick(props.chatId)}
    >
      <div className={styles.chatItem_avatar}>
        <img src="/assets/avatar.png" alt="avatar" />
      </div>
      {props.chatId}
    </div>
  )
}

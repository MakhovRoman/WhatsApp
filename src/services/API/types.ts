export type LoginRequestData = {
  idInstance: string,
  apiTokenInstance: string
}

export type ChatSendMessage = {
  chatId: string,
  message: string
}

export type TDataSendMessage = {
  sendMessage: ChatSendMessage,
  userData: LoginRequestData
}

export type TChatHistory = {
  chatId: string,
  count: number
}

export type TRequestChatHistory = {
  userData: LoginRequestData,
  chatData: TChatHistory
}


import { request } from "./apiRequest";
import { ChatSendMessage, LoginRequestData, TRequestChatHistory, TDataSendMessage } from "./types";


export const chatAPI = {
  send: async(data: TDataSendMessage) => {
    const result = await request.post(
      `/waInstance${data.userData.idInstance}/sendMessage/${data.userData.apiTokenInstance}`,
      data.sendMessage
    );
    console.log(result);
    return result;
  },
  getChatHistory: async(data: TRequestChatHistory) => {
    const result = await request.post(
      `/waInstance${data.userData.idInstance}/getChatHistory/${data.userData.apiTokenInstance}`,
      data.chatData
    );
    console.log(result.data);
    return result.data;
  }
}

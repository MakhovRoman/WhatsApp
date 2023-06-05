import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TMessageType } from '@src/components/message-item/MessageItem';
import { chatAPI } from '@src/services/API/chatAPI';
import { TRequestChatHistory } from '@src/services/API/types';
import { AddChatIdPostffics } from '@src/utils/addChatIdPreffics';

type TInitialState = {
  list: Record<string, string>,
  currentChat: string,
  currentChatHistory: Array<TChatHistoryItems>
};

type TChatHistoryItems = {
  chatId: string,
  extendedTextMessage: Record<string, string | null>,
  idMessage: string,
  sendByApi: boolean,
  statusMessage: string,
  textMessage: string,
  timestamp: number,
  type: TMessageType,
  typeMessage: string
}

const initialState: TInitialState = {
  list: {},
  currentChat: '',
  currentChatHistory: []
};

export const chatThunks = {
  getCurrentChatHistory: createAsyncThunk<void, TRequestChatHistory>(
    "CHAT/getCurrentChatHistory",
    async (data, {dispatch}) => {
      const result = await chatAPI.getChatHistory(data);
      dispatch(getCurrentChatHistory(result));
    }
  )
}

export const chatSlice = createSlice({
  name: "CHAT",
  initialState: initialState,
  reducers: {
    addChat: (state, action) => {
      const item = action.payload;
      const transforItem = AddChatIdPostffics(item);

      state.list[item] = transforItem;
    },

    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },

    getCurrentChatHistory: (state, action) => {
      state.currentChatHistory = action.payload;
    }
  }
})

export default chatSlice.reducer;
export const { addChat, setCurrentChat, getCurrentChatHistory } = chatSlice.actions;

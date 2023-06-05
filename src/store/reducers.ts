import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import chatsSlice from "./slices/chatsSlice";

export const rootReducer = combineReducers({
  user: authSlice,
  chat: chatsSlice,
})

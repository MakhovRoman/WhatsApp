import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '@src/services/API/authAPI';
import { LoginRequestData } from '@src/services/API/types';

type TInitialState = {
  isAuth: boolean,
  isLoading: boolean,
  data: TUserData
}

export type TUserData = {
  idInstance: string | null,
  apiTokenInstance: string | null
}

const initialState: TInitialState = {
  isAuth: false,
  isLoading: false,
  data: {
    idInstance: null,
    apiTokenInstance: null
  }
}

export const authThunks = {
  login: createAsyncThunk<void, LoginRequestData>(
    "AUTH/login",
    async (data, {dispatch}) => {
      await authAPI.login(data);
      dispatch(login(data))
    }
  ),
}

export const authSlice = createSlice({
  name: 'AUTH',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.data = action.payload;
    },

    logout: (state) => {
      state.isAuth = false;
      state.data = {
        idInstance: null,
        apiTokenInstance: null
      }
    }
  },
  extraReducers(builder) {
      builder.addCase(authThunks.login.pending, (state) => {
        console.log('start');
        state.isLoading = true;
      }),
      builder.addCase(authThunks.login.fulfilled, (state) => {
        console.log('end')
        state.isLoading = false;
      })
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '@src/services/API/authAPI';
import { LoginRequestData } from '@src/services/API/types';

type TInitialState = {
  isAuth: boolean,
  isLoading: boolean
}

const initialState: TInitialState = {
  isAuth: false,
  isLoading: false
}

export const authThunks = {
  login: createAsyncThunk<void, LoginRequestData>(
    "AUTH/login",
    async (data, {dispatch}) => {
      authAPI.login(data);
      dispatch(login())
    }
  ),
}

export const authSlice = createSlice({
  name: 'AUTH',
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },

    logout: (state) => {
      state.isAuth = false;
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

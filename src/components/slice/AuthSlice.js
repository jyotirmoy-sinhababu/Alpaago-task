import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user-info')) || null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;

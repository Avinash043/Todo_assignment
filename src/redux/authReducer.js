import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    isLogin: false,
    userName: null,
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;  
      localStorage.setItem("users", JSON.stringify(state.user));
    },
    logout: (state,action) => {
        state.user = action.payload;    
      localStorage.setItem("users", JSON.stringify(state.user));
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

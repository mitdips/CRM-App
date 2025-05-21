import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    token: null,
    userData:null,
  },

  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    userData: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setIsFirstLaunch, setIsLoggedIn, userData } = authSlice.actions;
export default authSlice.reducer;
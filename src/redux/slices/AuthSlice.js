import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
});

export const {setToken, setUserData} = authSlice.actions;
export default authSlice.reducer;

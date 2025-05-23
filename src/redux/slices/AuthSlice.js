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
      const {
        uid,
        email,
        displayName,
        photoURL,
        phoneNumber,
        emailVerified,
        metadata
      } = action.payload;

      state.userData = {
        uid,
        email,
        displayName,
        photoURL,
        phoneNumber,
        emailVerified,
        metadata: {
          creationTime: metadata?.creationTime,
          lastSignInTime: metadata?.lastSignInTime
        }
      };
      state.isAuthenticated = true;
    },
    clearUserData: state => {
      state.userData = null;
      state.isAuthenticated = false;
    },
  },
});

export const {setUserData, clearUserData} = authSlice.actions;
export default authSlice.reducer;

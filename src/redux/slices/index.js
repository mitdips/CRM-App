import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './AuthSlice';

const reducers = combineReducers({
  auth: authSlice,
});

export default reducers;

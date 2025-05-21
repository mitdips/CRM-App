import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './slices'; // Assuming this is your combined reducers

const persistConfig = {
  key: 'socialmedia-root',
  storage: AsyncStorage,
  whitelist: ['auth'], // Add slices you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);

export default {store, persistor};

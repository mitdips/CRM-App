import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './slices'; 

const persistConfig = {
  key: 'crm_app',
  storage: AsyncStorage,
  whitelist: ['auth'], 
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these paths in the state
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['register.imageData', 'profile.imageData'],
      },
      immutableCheck: {
        // Ignore these paths in the state
        ignoredPaths: ['register.imageData', 'profile.imageData'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
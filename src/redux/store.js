import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import userReducer from './userSlice'; 

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    user: userReducer,
  },
});

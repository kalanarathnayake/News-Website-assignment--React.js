import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import newsReducer from './slices/news.slice';

export const store = configureStore({
  reducer: {
    admin: authReducer,
    news: newsReducer,
  },
});
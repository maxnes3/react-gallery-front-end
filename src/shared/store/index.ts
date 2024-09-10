import { configureStore } from '@reduxjs/toolkit';
import { pageReducer } from '../painting';
import { themeReducer } from '../theme';

const store = configureStore({
  reducer: {
    page: pageReducer,
    theme: themeReducer,
  },
});

export default store;

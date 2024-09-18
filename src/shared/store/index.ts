import { configureStore } from '@reduxjs/toolkit';
import { pageReducer } from '../painting';
import { themeReducer } from '../theme';
import { filterReducer } from '../filter';

const store = configureStore({
  reducer: {
    page: pageReducer,
    theme: themeReducer,
    filter: filterReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { pageReducer } from '../painting';

const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export default store;

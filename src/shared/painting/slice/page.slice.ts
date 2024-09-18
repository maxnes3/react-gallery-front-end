/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import PageManager from '../utils/page.utils';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    current: PageManager.getCurrentPageFromUrl(),
    total: 1,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.current = action.payload;
      PageManager.setPageInUrl(action.payload);
    },
    setTotalPages(state, action) {
      state.total = action.payload;
    },
  },
});

export const { setCurrentPage, setTotalPages } = pageSlice.actions;

export default pageSlice.reducer;

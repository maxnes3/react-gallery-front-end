/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    current: 1,
    total: 1,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.current = action.payload;
      console.log(state.current);
    },
    setTotalPages(state, action) {
      state.total = action.payload;
    },
  },
});

export const { setCurrentPage, setTotalPages } = pageSlice.actions;

export default pageSlice.reducer;

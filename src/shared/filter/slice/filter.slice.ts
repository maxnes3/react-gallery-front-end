/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    panel: false,
  },
  reducers: {
    togglePanel(state) {
      state.panel = !state.panel;
    },
  },
});

export const { togglePanel } = filterSlice.actions;

export default filterSlice.reducer;

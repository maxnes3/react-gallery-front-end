/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    return savedTheme;
  }

  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  localStorage.setItem('theme', preferredTheme);
  return preferredTheme;
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: getInitialTheme(),
  },
  reducers: {
    switchTheme(state) {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      document.body.classList.remove(state.theme);
      document.body.classList.add(newTheme);
      state.theme = newTheme;
      localStorage.setItem('theme', newTheme);
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;

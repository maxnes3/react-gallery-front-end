/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import ThemeManager from '../utils/theme.utils';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: ThemeManager.getInitialTheme(),
  },
  reducers: {
    switchTheme(state) {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      ThemeManager.switchBodyTheme(newTheme, state.theme);
      state.theme = newTheme;
      ThemeManager.saveThemeToLocalStorage(newTheme);
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;

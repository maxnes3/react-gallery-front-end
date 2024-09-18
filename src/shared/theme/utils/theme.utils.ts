class ThemeManager {
  static switchBodyTheme(newTheme: string, oldTheme?: string) {
    if (oldTheme) document.body.classList.remove(oldTheme);
    document.body.classList.add(newTheme);
  }

  static saveThemeToLocalStorage(theme: string) {
    localStorage.setItem('theme', theme);
  }

  static getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      ThemeManager.switchBodyTheme(savedTheme);
      return savedTheme;
    }

    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    ThemeManager.saveThemeToLocalStorage(preferredTheme);
    ThemeManager.switchBodyTheme(preferredTheme);
    return preferredTheme;
  }
}

export default ThemeManager;

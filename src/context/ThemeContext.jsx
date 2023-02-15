import { createContext, useContext, useState } from 'react';
import { THEMES } from '@constants/themes';
import { LOCAL_STORAGE_KEYS } from '@constants/localStorageKeys';

export const ThemeContext = createContext(THEMES.light);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeChangeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEYS.theme)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.theme))
      : THEMES.light
  );

  const toggleTheme = () => {
    const change = theme.type === THEMES.light.type ? THEMES.dark : THEMES.light;

    setTheme(change);
    localStorage.setItem(LOCAL_STORAGE_KEYS.theme, JSON.stringify(change));
  };

  return (
    <ThemeContext.Provider
      value={{
        changeTheme: theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from 'react';
import { themes } from '../constants/theme';

export const ThemeContext = createContext(themes.light);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeChangeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme') || '') : themes.light
  );

  const toggleTheme = () => {
    setTheme(theme.type === 'light' ? themes.dark : themes.light);
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

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

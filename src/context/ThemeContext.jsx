import { createContext, useContext, useEffect, useState } from 'react';
import { THEMES } from '../constants/themes';

export const ThemeContext = createContext(THEMES.light);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeChangeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme') || '') : THEMES.light
  );

  const toggleTheme = () => {
    setTheme(theme.type === 'light' ? THEMES.dark : THEMES.light);
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

import { createContext, useContext, useState } from 'react';
import { THEMES } from '@Constants/themes';

export const ThemeContext = createContext(THEMES.light);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeChangeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    typeof JSON.parse(localStorage.getItem('theme')) === 'object'
      ? JSON.parse(localStorage.getItem('theme'))
      : THEMES.light
  );

  const toggleTheme = () => {
    const change = theme.type === THEMES.light.type ? THEMES.dark : THEMES.light;

    setTheme(change);
    localStorage.setItem('theme', JSON.stringify(change));
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

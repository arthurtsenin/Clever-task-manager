import { AuthContextProvider } from '@context/AuthContext';
import { TodoContextProvider } from '@context/TodoContext';
import { ThemeChangeProvider } from '@context/ThemeContext';

export const Providers = ({ children }) => {
  return (
    <ThemeChangeProvider>
      <AuthContextProvider>
        <TodoContextProvider>{children}</TodoContextProvider>
      </AuthContextProvider>
    </ThemeChangeProvider>
  );
};

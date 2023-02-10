import { AuthContextProvider } from '@Context/AuthContext';
import { TodoContextProvider } from '@Context/TodoContext';
import { ThemeChangeProvider } from '@Context/ThemeContext';

export const Providers = ({ children }) => {
  return (
    <ThemeChangeProvider>
      <AuthContextProvider>
        <TodoContextProvider>{children}</TodoContextProvider>
      </AuthContextProvider>
    </ThemeChangeProvider>
  );
};

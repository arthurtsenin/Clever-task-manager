import { AuthContextProvider } from './AuthContext';
import { TodoContextProvider } from './TodoContext';
import { ThemeChangeProvider } from './ThemeContext';

export const Providers = ({ children }) => {
  return (
    <ThemeChangeProvider>
      <AuthContextProvider>
        <TodoContextProvider>{children}</TodoContextProvider>
      </AuthContextProvider>
    </ThemeChangeProvider>
  );
};

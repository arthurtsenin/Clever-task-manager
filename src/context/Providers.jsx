import { AuthContextProvider } from '@context/AuthContext';
import { TodoContextProvider } from '@context/TodoContext';
import { ThemeChangeProvider } from '@context/ThemeContext';
import { DateValueProvider } from '@context/DateValueContext';

export const Providers = ({ children }) => {
  return (
    <ThemeChangeProvider>
      <AuthContextProvider>
        <DateValueProvider>
          <TodoContextProvider>{children}</TodoContextProvider>
        </DateValueProvider>
      </AuthContextProvider>
    </ThemeChangeProvider>
  );
};

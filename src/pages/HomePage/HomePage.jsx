import { useTheme } from '@context/ThemeContext';
import { Layout } from '@views/layout/Layout';
import { StyledPage } from './HomePage.styles';

export const HomePage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <Layout />
    </StyledPage>
  );
};

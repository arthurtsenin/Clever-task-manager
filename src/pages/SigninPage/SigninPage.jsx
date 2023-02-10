import { SignIn } from '@containers/signIn/SignIn';
import { useTheme } from '@context/ThemeContext';
import { StyledPage } from './SigninPage.styles';

export const SigninPage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <SignIn />
    </StyledPage>
  );
};

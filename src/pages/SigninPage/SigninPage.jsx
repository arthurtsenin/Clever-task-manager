import { SignIn } from '@Containers/signIn/SignIn';
import { useTheme } from '@Context/ThemeContext';
import { StyledPage } from './SigninPage.styles';

export const SigninPage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <SignIn />
    </StyledPage>
  );
};

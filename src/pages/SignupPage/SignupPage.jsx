import { SignUp } from '@containers/signUp/SignUp';
import { useTheme } from '@context/ThemeContext';
import { StyledPage } from './SignupPage.styles';

export const SignupPage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <SignUp />
    </StyledPage>
  );
};

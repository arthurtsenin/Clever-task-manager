import { SignUp } from '@Containers/signUp/SignUp';
import { useTheme } from '@Context/ThemeContext';
import { StyledPage } from './SignupPage.styles';

export const SignupPage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <SignUp />
    </StyledPage>
  );
};

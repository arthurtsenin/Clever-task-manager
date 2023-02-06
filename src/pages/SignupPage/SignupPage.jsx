import { Sign } from '../../components/sign/sign';
import { useTheme } from '../../context/ThemeContext';
import { StyledPage } from './SignupPage.styled';

export const SignupPage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <Sign isSign={false} />
    </StyledPage>
  );
};

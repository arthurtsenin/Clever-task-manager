import { Sign } from '../../components/containers/sign/Sign';
import { useTheme } from '../../context/ThemeContext';
import { StyledPage } from './SignupPage.styles';

export const SignupPage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <Sign isSign={false} />
    </StyledPage>
  );
};

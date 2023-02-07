import { Sign } from '../../components/containers/sign/Sign';
import { useTheme } from '../../context/ThemeContext';
import { StyledPage } from './SigninPage.styles';

export const SigninPage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <Sign isSign={true} />
    </StyledPage>
  );
};

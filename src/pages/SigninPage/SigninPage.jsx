import { Sign } from '../../components/sign/sign';
import { useTheme } from '../../context/ThemeContext';
import { StyledPage } from './SigninPage.styled';

export const SigninPage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <Sign isSign={true} />
    </StyledPage>
  );
};

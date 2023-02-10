import { StyledButton } from './PrimaryButton.styles';
import { useTheme } from '@Context/ThemeContext';

export const PrimaryButton = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <StyledButton theme={theme} {...props}>
      {children}
    </StyledButton>
  );
};

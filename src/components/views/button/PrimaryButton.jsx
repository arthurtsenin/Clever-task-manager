import { useTheme } from '@context/ThemeContext';
import { StyledButton } from './PrimaryButton.styles';

export const PrimaryButton = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <StyledButton theme={theme} {...props}>
      {children}
    </StyledButton>
  );
};

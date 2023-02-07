import { StyledButton } from './PrimaryButton.styles';

export const PrimaryButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

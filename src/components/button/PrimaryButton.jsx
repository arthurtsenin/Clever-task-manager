import { StyledButton } from './PrimaryButton.styled';

export const PrimaryButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

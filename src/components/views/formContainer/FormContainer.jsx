import { StyledContainer } from './FormContainer.styles';

export const FormContainer = ({ children, ...props }) => {
  return (
    <StyledContainer component="main" maxWidth="sm" {...props}>
      {children}
    </StyledContainer>
  );
};

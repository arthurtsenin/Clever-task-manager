import Container from '@mui/material/Container';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding-top: 150px;
`;

export const FormContainer = ({ children, ...props }) => {
  return (
    <StyledContainer component="main" maxWidth="sm" {...props}>
      {children}
    </StyledContainer>
  );
};

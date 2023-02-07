import styled from 'styled-components';
import { MAIN_COLOR } from '../../../constants/mainColor';

export const StyledButton = styled.button`
  width: 150px;
  font-size: 25px;
  color: white;
  background-color: ${MAIN_COLOR.background};
  padding: 10px 0px;
  box-shadow: 5px 5px 10px gray;
  :hover {
    cursor: pointer;
    background-color: #d58300;
    box-shadow: 5px 5px 20px gray;
  }
`;

import styled from 'styled-components';
import { MAIN_COLOR } from '../../../constants/mainColor';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${MAIN_COLOR.background};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 1px 5px 10px gray;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-weight: 500;
  font-size: 20px;
`;

export const Email = styled.div`
  margin-right: 15px;
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 500;
  background-color: orange;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  width: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 5px gray;
  :hover {
    cursor: pointer;
    box-shadow: 1px 1px 20px gray;
  }
`;

import styled from 'styled-components';
import { MAIN_COLOR } from '../../../constants/mainColor';

export const StyledCalendarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
  min-width: 180px;
  height: 130px;
  font-size: 28px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${MAIN_COLOR.background};
  box-shadow: 5px 5px 10px gray;
  :hover {
    cursor: pointer;
    background-color: #d58300;
    box-shadow: 5px 5px 20px gray;
  }
`;

export const WeekDay = styled.div`
  font-weight: 600;
`;
export const MonthNumber = styled.div`
  font-size: 32px;
  color: white;
`;
export const Month = styled.div`
  font-weight: 600;
`;

export const DotHasTask = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 5px;
`;
export const DotHasCheckedTask = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: darkgray;
`;

export const DotsMarkers = styled.div`
  display: flex;
`;

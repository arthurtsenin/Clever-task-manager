import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  overflow: auto;
  /* ::-webkit-scrollbar {
    width: 0;
  } */
`;

export const InfoContainer = styled.div`
  padding: 70px 15px 0;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
`;

export const Date = styled.div`
  margin-top: 10px;
`;

export const Tasks = styled.div`
  margin-top: 10px;
  color: blue;
`;

export const CompletedTasks = styled.div`
  color: green;
  margin-top: 10px;
`;

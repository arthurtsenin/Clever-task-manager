import {
  StyledCalendarItem,
  WeekDay,
  MonthNumber,
  Month,
  DotHasTask,
  DotHasCheckedTask,
  DotsMarkers,
} from './CalendarItem.styles';
import { DATE_FORMAT } from '../../../constants/dateFormat';
import { useEffect, useState } from 'react';
import { UserTodo } from '../../../context/TodoContext';

export const CalendarItem = ({ day, weekDay, monthNumber, month, className, onClick }) => {
  const { todos } = UserTodo();
  const [todoDays, setTodoDays] = useState([]);
  const [taskCompleted, setTaskCompleted] = useState([]);

  useEffect(() => {
    setTodoDays(findDaysWithTasks());
    setTaskCompleted(findDaysWithCompletedTasks());
  }, [todos]);

  const findDaysWithTasks = () => {
    return todos.map((todo) => todo.createdAt).includes(day.format(DATE_FORMAT));
  };

  const findDaysWithCompletedTasks = () => {
    return todos
      .filter((todo) => todo.createdAt === day.format(DATE_FORMAT))
      .find((item) => item.completed);
  };

  return (
    <>
      <StyledCalendarItem className={className} onClick={onClick}>
        <WeekDay>{weekDay}</WeekDay>
        <MonthNumber>{monthNumber}</MonthNumber>
        <Month>{month}</Month>
        <DotsMarkers>
          {todoDays ? <DotHasTask /> : null}
          {taskCompleted ? <DotHasCheckedTask /> : null}
        </DotsMarkers>
      </StyledCalendarItem>
    </>
  );
};

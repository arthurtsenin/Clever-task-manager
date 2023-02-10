import { useMemo } from 'react';
import { UserTodo } from '@Context/TodoContext';
import { useTheme } from '@Context/ThemeContext';
import { findDaysWithTasks, findDaysWithCompletedTasks } from '@Util/findDaysWithTasks';
import { weekDayFormat, monthNumberFormat, monthFormat, markerDay } from '@Api/dateHelper';
import {
  StyledCalendarItem,
  WeekDay,
  MonthNumber,
  Month,
  DotHasTask,
  DotHasCheckedTask,
  DotsMarkers,
} from './CalendarItem.styles';

export const CalendarItem = ({ day, value, onClick }) => {
  const { todos } = UserTodo();
  const theme = useTheme();

  const dayIncludeTask = useMemo(() => findDaysWithTasks(todos, day), [todos, day]);
  const dayIncludeCompletedTask = useMemo(
    () => findDaysWithCompletedTasks(todos, day),
    [todos, day]
  );

  return (
    <>
      <StyledCalendarItem theme={theme} className={markerDay(value, day)} onClick={onClick}>
        <WeekDay>{weekDayFormat(day)}</WeekDay>
        <MonthNumber>{monthNumberFormat(day)}</MonthNumber>
        <Month>{monthFormat(day)}</Month>
        <DotsMarkers>
          {dayIncludeTask && <DotHasTask />}
          {dayIncludeCompletedTask && <DotHasCheckedTask />}
        </DotsMarkers>
      </StyledCalendarItem>
    </>
  );
};

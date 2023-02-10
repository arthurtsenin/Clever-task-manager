import { useMemo } from 'react';
import { UserTodo } from '@context/TodoContext';
import { useTheme } from '@context/ThemeContext';
import {
  findDaysWithTasks,
  findDaysWithCompletedTasks,
} from '@containers/calendarItem/utils/findDaysWithTasks';
import {
  weekDayFormat,
  monthNumberFormat,
  monthFormat,
} from '@containers/calendarItem/utils/dayFormats';
import { isSameDay } from '@containers/calendarItem/utils/isSameDay';
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
      <StyledCalendarItem theme={theme} className={isSameDay(value, day)} onClick={onClick}>
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

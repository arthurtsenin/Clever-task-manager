import React, { useMemo } from 'react';
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
  const statusMarker = useMemo(() => isSameDay(value, day), [value, day]);
  const weekDay = useMemo(() => weekDayFormat(day), [day]);
  const monthNumberr = useMemo(() => monthNumberFormat(day), [day]);
  const month = useMemo(() => monthFormat(day), [day]);
  return (
    <>
      <StyledCalendarItem theme={theme} className={statusMarker} onClick={onClick}>
        <WeekDay>{weekDay}</WeekDay>
        <MonthNumber>{monthNumberr}</MonthNumber>
        <Month>{month}</Month>
        <DotsMarkers>
          {dayIncludeTask && <DotHasTask />}
          {dayIncludeCompletedTask && <DotHasCheckedTask />}
        </DotsMarkers>
      </StyledCalendarItem>
    </>
  );
};

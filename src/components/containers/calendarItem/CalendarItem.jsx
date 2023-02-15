import React, { useMemo, memo } from 'react';
import { UserTodo } from '@context/TodoContext';
import { useTheme } from '@context/ThemeContext';
import { useDateValue } from '@context/DateValueContext';
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

export const CalendarItem = memo(({ day }) => {
  const { todos } = UserTodo();
  const { dateValue, changeDateValue } = useDateValue();
  const theme = useTheme();

  const dayWithTask = useMemo(() => findDaysWithTasks(todos, day), [todos, day]);
  const dayWithCompletedTask = useMemo(() => findDaysWithCompletedTasks(todos, day), [todos, day]);
  const statusMarker = useMemo(() => isSameDay(dateValue, day), [dateValue, day]);
  const weekDay = useMemo(() => weekDayFormat(day), [day]);
  const monthNumberr = useMemo(() => monthNumberFormat(day), [day]);
  const month = useMemo(() => monthFormat(day), [day]);
  const changeDate = useMemo(() => () => changeDateValue(day), [changeDateValue, day]);

  return (
    <>
      <StyledCalendarItem theme={theme} className={statusMarker} onClick={changeDate}>
        <WeekDay>{weekDay}</WeekDay>
        <MonthNumber>{monthNumberr}</MonthNumber>
        <Month>{month}</Month>
        <DotsMarkers>
          {dayWithTask && <DotHasTask />}
          {dayWithCompletedTask && <DotHasCheckedTask />}
        </DotsMarkers>
      </StyledCalendarItem>
    </>
  );
});

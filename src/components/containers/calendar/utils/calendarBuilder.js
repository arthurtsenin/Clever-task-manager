import { getInitialDay, getMonthEndDay, controlDaysInCalendar, getNextDay } from '@api/dateHelper';

export const buildCalendar = (value, week) => {
  let day = getInitialDay();
  const endDay = getMonthEndDay(value, week);
  const calendar = [];

  while (controlDaysInCalendar(day, endDay)) {
    calendar.push(day);
    day = getNextDay(day);
  }
  return calendar;
};

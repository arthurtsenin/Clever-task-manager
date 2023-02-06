import moment from 'moment';

export const buildCalendar = (value, week) => {
  const startDay = moment();
  const endDay = value.clone().add(week, 'month');
  const day = startDay.clone().subtract(1, 'day');
  const calendar = [];
  while (day.isBefore(endDay, 'day')) {
    calendar.push(day.add(1, 'day').clone());
  }
  return calendar;
};

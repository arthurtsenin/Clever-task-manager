import dayjs from 'dayjs';
import { DATE_FORMAT, REVERTE_DATE_FORMAT } from '@Constants/dateFormat';

export const buildCalendar = (value, week) => {
  let day = dayjs().clone();
  const endDay = value.add(week, 'month');
  const calendar = [];

  while (day.isBefore(endDay, 'day')) {
    calendar.push(day);
    day = day.add(1, 'day');
  }
  return calendar;
};

export const dateValidator = (date) => {
  return dayjs(date).add(1, 'day').isBefore(new Date());
};

export const initialDay = () => {
  return dayjs();
};

export const currentDay = () => {
  return dayjs().format(DATE_FORMAT);
};

export const choosenDay = (value) => {
  return value.format(DATE_FORMAT);
};

export const revertChoosenDay = (value) => {
  return value.format(REVERTE_DATE_FORMAT);
};

export const createdAtDate = (date, value) => {
  return date.replace(/(\d*)-(\d*)-(\d*)/, '$3-$2-$1') || choosenDay(value);
};

export const markerDay = (value, day) => {
  return day.isSame(dayjs(), 'day') ? 'current' : value.isSame(day, 'day') ? 'chosen' : '';
};

export const weekDayFormat = (day) => {
  return day.format('dddd');
};

export const monthNumberFormat = (day) => {
  return day.format('D');
};

export const monthFormat = (day) => {
  return day.format('MMMM');
};

export const refreshClock = (setDate) => {
  setDate(new Date());
};

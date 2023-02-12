import dayjs from 'dayjs';
import { DATE_FORMAT, REVERTE_DATE_FORMAT } from '@constants/dateFormat';

export const getInitialDay = () => {
  return dayjs();
};

export const getNextDay = (day) => {
  return day.add(1, 'day');
};

export const getMonthEndDay = (value, week) => {
  return value.add(week, 'month');
};

export const controlDaysInCalendar = (day, endDay) => {
  return day.isBefore(endDay, 'day');
};

export const getCurrentDay = () => {
  return dayjs().format(DATE_FORMAT);
};

export const getChoosenDay = (value) => {
  return value.format(DATE_FORMAT);
};

export const revertChoosenDay = (value) => {
  return value.format(REVERTE_DATE_FORMAT);
};

export const setDatePickersDate = (date, chosenDate) => {
  return date || revertChoosenDay(chosenDate);
};

export const getCreatedAtDate = (date, value) => {
  return date.replace(/(\d*)-(\d*)-(\d*)/, '$3-$2-$1') || getChoosenDay(value);
};

export const validateDate = (date) => {
  return dayjs(date).add(1, 'day').isBefore(new Date());
};

export const isSameCurrentDay = (day) => {
  return day.isSame(dayjs(), 'day');
};

export const isSameChoosenDay = (value, day) => {
  return value.isSame(day, 'day');
};

import { isSameCurrentDay, isSameChoosenDay } from '@api/dateHelper';

export const isSameDay = (value, day) => {
  return isSameCurrentDay(day) ? 'current' : isSameChoosenDay(value, day) ? 'choosen' : '';
};

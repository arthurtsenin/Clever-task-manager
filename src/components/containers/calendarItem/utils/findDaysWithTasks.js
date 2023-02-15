import { DATE_FORMAT } from '@constants/dateFormat';

export const findDaysWithTasks = (todos, day) => {
  return todos.map((todo) => todo.createdAt).includes(day.format(DATE_FORMAT));
};

export const findDaysWithCompletedTasks = (todos, day) => {
  return todos
    .filter((todo) => todo.createdAt === day.format(DATE_FORMAT))
    .find((item) => item.completed);
};

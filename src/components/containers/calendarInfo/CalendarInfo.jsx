import { useMemo, memo } from 'react';
import { getCurrentDay, getChoosenDay } from '@api/dateHelper';
import { UserTodo } from '@context/TodoContext';
import { useDateValue } from '@context/DateValueContext';
import { Date, InfoContainer, Tasks, CompletedTasks } from './CalendarInfo.styles';

export const CalendarInfo = memo(() => {
  const { dateValue } = useDateValue();
  const { todos } = UserTodo();

  const completedTasksLength = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos]
  );

  return (
    <InfoContainer>
      <div>
        <Date>Current date: {getCurrentDay()}</Date>
        <Date>Choosen date: {getChoosenDay(dateValue)}</Date>
      </div>
      <div>
        <Tasks>Tasks: {todos.length}</Tasks>
        <CompletedTasks>Completed Tasks: {completedTasksLength}</CompletedTasks>
      </div>
    </InfoContainer>
  );
});

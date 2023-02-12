import { memo, useMemo } from 'react';
import { getChoosenDay } from '@api/dateHelper';
import { TodoItem } from '@containers/toDoItem/ToDoItem';
import { UserTodo } from '@context/TodoContext';
import { useDateValue } from '@context/DateValueContext';
import { TodosList } from './ToDoList.styles';

export const ToDoList = memo(({ handleUpdate, handleDelete, changeTodoCompletion }) => {
  const { todos } = UserTodo();
  const { dateValue } = useDateValue();

  const showTodos = useMemo(
    () =>
      todos
        .filter((todo) => todo.createdAt === getChoosenDay(dateValue))
        .map((todo) => (
          <TodoItem
            key={todo.uidd}
            todo={todo}
            handleUpdate={() => handleUpdate(todo)}
            handleDelete={() => handleDelete(todo.uidd)}
            toddleCompleted={() => changeTodoCompletion(todo)}
          />
        )),
    [changeTodoCompletion, dateValue, handleDelete, handleUpdate, todos]
  );

  return (
    <>
      <TodosList>{showTodos}</TodosList>
    </>
  );
});

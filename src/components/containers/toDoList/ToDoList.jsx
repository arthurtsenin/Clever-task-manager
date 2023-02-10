import { useEffect, useState } from 'react';
import { uid } from 'uid';
import { TodoItem } from '@containers/toDoItem/ToDoItem';
import { PrimaryButton } from '@views/button/PrimaryButton';
import { showErrorDateChoose } from '@views/toasts/showErrorDateChoose';
import { UserTodo } from '@context/TodoContext';
import { validateDate, revertChoosenDay, getChoosenDay } from '@api/dateHelper';
import { auth } from '@api/authHelper';
import { wrireTodo, updateCheckedTodo, updateTodo, deleteTodo } from '@api/todosHelper';
import TextField from '@mui/material/TextField';
import { AddToDo, TodosList } from './ToDoList.styles';

export const ToDoList = ({ chosenDate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [tempUidd, setTempUidd] = useState('');
  const { todos } = UserTodo();

  useEffect(() => {
    if (validateDate(date)) {
      showErrorDateChoose();
    }
  }, [date]);

  const writeToDatabase = () => {
    const uidd = uid();

    wrireTodo(auth, uidd, title, description, date, chosenDate);
    setTitle('');
    setDescription('');
    setDate('');
  };

  const handleUpdate = (todo) => {
    setIsEdit(true);
    setTitle(todo.title);
    setDescription(todo.description);
    setTempUidd(todo.uidd);
  };

  const changeTodoCompletion = (todo) => {
    updateCheckedTodo(auth, todo);
  };

  const handleEditConfirm = () => {
    updateTodo(auth, tempUidd, title, description, date, chosenDate);
    setTitle('');
    setDescription('');
    setDate('');
    setIsEdit(false);
  };

  const handleDelete = (uid) => {
    deleteTodo(auth, uid);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <AddToDo>
        <TextField
          variant="outlined"
          color="warning"
          label="Title"
          type="text"
          error={!title.trim()}
          value={title}
          onChange={handleChangeTitle}
          required
        />
        <TextField
          type="text"
          variant="outlined"
          color="warning"
          label="Description"
          value={description}
          onChange={handleChangeDescription}
        />
        <TextField
          type="date"
          color="warning"
          variant="outlined"
          value={date || revertChoosenDay(chosenDate)}
          onChange={handleChangeDate}
        />
        {isEdit ? (
          <PrimaryButton disabled={!title || validateDate(date)} onClick={handleEditConfirm}>
            CONFIRM
          </PrimaryButton>
        ) : (
          <PrimaryButton disabled={!title || validateDate(date)} onClick={writeToDatabase}>
            ADD
          </PrimaryButton>
        )}
      </AddToDo>
      <TodosList>
        {todos
          .filter((todo) => todo.createdAt === getChoosenDay(chosenDate))
          .map((todo) => (
            <TodoItem
              key={todo.uidd}
              todo={todo}
              handleUpdate={() => handleUpdate(todo)}
              handleDelete={() => handleDelete(todo.uidd)}
              toddleCompleted={() => changeTodoCompletion(todo)}
            />
          ))}
      </TodosList>
    </>
  );
};

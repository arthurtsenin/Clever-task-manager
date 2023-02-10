import { useEffect, useState } from 'react';
import { TodoItem } from '@Containers/toDoItem/ToDoItem';
import { PrimaryButton } from '@Views/button/PrimaryButton';
import { ErrorDateChoose } from '@Views/toasts/ErrorDateChoose';
import { UserTodo } from '@Context/TodoContext';
import { uid } from 'uid';
import { dateValidator, revertChoosenDay, choosenDay } from '../../../api/dateHelper';
import TextField from '@mui/material/TextField';
import { AddToDo, TodosList } from './ToDoList.styles';
import {
  authWrireTodo,
  authUpdateCheckedTodo,
  authUpdateTodo,
  authDeleteTodo,
} from '../../../api/authHelper';

export const ToDoList = ({ chosenDate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [tempUidd, setTempUidd] = useState('');
  const { todos } = UserTodo();

  useEffect(() => {
    if (dateValidator(date)) {
      ErrorDateChoose();
    }
  }, [date]);

  const writeToDatabase = () => {
    const uidd = uid();

    authWrireTodo(uidd, title, description, date, chosenDate);
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
    authUpdateCheckedTodo(todo);
  };

  const handleEditConfirm = () => {
    authUpdateTodo(tempUidd, title, description, date, chosenDate);
    setTitle('');
    setDescription('');
    setDate('');
    setIsEdit(false);
  };

  const handleDelete = (uid) => {
    authDeleteTodo(uid);
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
          <PrimaryButton disabled={!title || dateValidator(date)} onClick={handleEditConfirm}>
            CONFIRM
          </PrimaryButton>
        ) : (
          <PrimaryButton disabled={!title || dateValidator(date)} onClick={writeToDatabase}>
            ADD
          </PrimaryButton>
        )}
      </AddToDo>
      <TodosList>
        {todos
          .filter((todo) => todo.createdAt === choosenDay(chosenDate))
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

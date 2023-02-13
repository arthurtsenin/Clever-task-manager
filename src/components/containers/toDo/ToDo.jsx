import { useEffect, useState, useMemo } from 'react';
import { uid } from 'uid';
import { validateDate, setDatePickersDate } from '@api/dateHelper';
import { auth } from '@api/authHelper';
import { wrireTodo, updateCheckedTodo, updateTodo, deleteTodo } from '@api/todosHelper';
import { PrimaryButton } from '@views/button/PrimaryButton';
import { showErrorDateChoose } from '@views/toasts/showErrorDateChoose';
import { useDateValue } from '@context/DateValueContext';
import { ToDoList } from '@containers/toDoList/ToDoList';
import TextField from '@mui/material/TextField';
import { AddToDo } from './ToDo.styles';

export const ToDo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [tempUidd, setTempUidd] = useState('');
  const { dateValue } = useDateValue();

  const writeToDatabase = () => {
    const uidd = uid();
    wrireTodo(auth, uidd, title, description, date, dateValue);
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
    updateTodo(auth, tempUidd, title, description, date, dateValue);
    setTitle('');
    setDescription('');
    setDate('');
    setIsEdit(false);
  };

  const handleDelete = (uid) => {
    deleteTodo(auth, uid);
  };

  const handleChangeTitle = (e) => {
    return setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const confirmDisabled = useMemo(() => !title || validateDate(date), [title, date]);
  const addDisabled = useMemo(() => !title || validateDate(date), [title, date]);

  useEffect(() => {
    if (validateDate(date)) {
      showErrorDateChoose();
    }
  }, [date]);

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
          value={setDatePickersDate(date, dateValue)}
          onChange={handleChangeDate}
        />
        {isEdit ? (
          <PrimaryButton disabled={confirmDisabled} onClick={handleEditConfirm}>
            CONFIRM
          </PrimaryButton>
        ) : (
          <PrimaryButton disabled={addDisabled} onClick={writeToDatabase}>
            ADD
          </PrimaryButton>
        )}
      </AddToDo>
      <ToDoList
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        changeTodoCompletion={changeTodoCompletion}
      />
    </>
  );
};

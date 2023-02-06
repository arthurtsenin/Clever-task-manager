import { useState } from 'react';
import { PrimaryButton } from '../../button/PrimaryButton';
import { TodoItem } from '../toDoItem/ToDoItem';
import { AddToDo, TodosList } from './ToDoList.styled';
import { UserTodo } from '../../../context/TodoContext';
import { auth, db } from '../../../api/firebase.config';
import { set, ref, remove, update } from 'firebase/database';
import { uid } from 'uid';
import { dateFormat } from '../../../constants/dateFormat';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import Swal from 'sweetalert2';

export const ToDoList = ({ chosenDate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [tempUidd, setTempUidd] = useState('');
  const { todos } = UserTodo();

  if (moment(date).add(1, 'day').isBefore(new Date())) {
    Swal.fire({
      icon: 'error',
      title: 'You can`t select a date in the past ',
    });
  }
  const writeToDatabase = () => {
    const uidd = uid();
    set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
      title: title,
      description: description,
      uidd: uidd,
      completed: false,
      createdAt: date.replace(/(\d*)-(\d*)-(\d*)/, '$3-$2-$1') || chosenDate.format(dateFormat),
    });

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
    update(ref(db, `/${auth.currentUser.uid}/${todo.uidd}`), { completed: !todo.completed });
  };

  const handleEditConfirm = () => {
    update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`), {
      title: title,
      description: description,
      tempUidd: tempUidd,
      createdAt: date.replace(/(\d*)-(\d*)-(\d*)/, '$3-$2-$1') || chosenDate.format(dateFormat),
    });

    setTitle('');
    setDescription('');
    setDate('');
    setIsEdit(false);
  };

  const handleDelete = (uid) => {
    remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
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
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          type="text"
          variant="outlined"
          color="warning"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          type="date"
          color="warning"
          variant="outlined"
          value={date || chosenDate.format('YYYY-MM-DD')}
          onChange={(e) => setDate(e.target.value)}
        />
        {isEdit ? (
          <PrimaryButton
            disabled={!title || moment(date).add(1, 'day').isBefore(new Date())}
            onClick={handleEditConfirm}
          >
            CONFIRM
          </PrimaryButton>
        ) : (
          <PrimaryButton
            disabled={!title || moment(date).add(1, 'day').isBefore(new Date())}
            onClick={writeToDatabase}
          >
            ADD
          </PrimaryButton>
        )}
      </AddToDo>
      <TodosList>
        {todos
          .filter((todo) => todo.createdAt === chosenDate.format(dateFormat))
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

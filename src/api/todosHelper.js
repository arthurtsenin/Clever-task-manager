import { getDatabase, onValue, ref, set, update, remove } from 'firebase/database';
import { app } from '@Api/firebase.config';
import { createdAtDate } from '@Api/dateHelper';

export const db = getDatabase(app);

export const readTodos = (auth, setTodos) => {
  return onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
    setTodos([]);
    const data = snapshot.val();
    if (data) {
      Object.values(data).map((todo) => {
        setTodos((oldArray) => [...oldArray, todo]);
      });
    }
  });
};

export const wrireTodo = (auth, uidd, title, description, date, chosenDate) => {
  return set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
    title: title,
    description: description,
    uidd: uidd,
    completed: false,
    createdAt: createdAtDate(date, chosenDate),
  });
};

export const updateCheckedTodo = (auth, todo) => {
  return update(ref(db, `/${auth.currentUser.uid}/${todo.uidd}`), { completed: !todo.completed });
};

export const updateTodo = (auth, tempUidd, title, description, date, chosenDate) => {
  return update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`), {
    title: title,
    description: description,
    tempUidd: tempUidd,
    createdAt: createdAtDate(date, chosenDate),
  });
};

export const deleteTodo = (auth, uid) => {
  return remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
};

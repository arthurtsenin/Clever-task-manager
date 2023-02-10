import { getAuth } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from '@Api/firebase.config';
import { readTodos, wrireTodo, updateCheckedTodo, updateTodo, deleteTodo } from '@Api/todosHelper';

export const auth = getAuth(app);

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

export const authState = (addtUser) => {
  return onAuthStateChanged(auth, addtUser);
};

export const authCheck = (setTodos) => {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      readTodos(auth, setTodos);
    }
  });
};

export const authWrireTodo = (uidd, title, description, date, chosenDate) => {
  return wrireTodo(auth, uidd, title, description, date, chosenDate);
};

export const authUpdateCheckedTodo = (todo) => {
  return updateCheckedTodo(auth, todo);
};

export const authUpdateTodo = (uid, tempUidd, title, description, date, chosenDate) => {
  return updateTodo(auth, uid, tempUidd, title, description, date, chosenDate);
};

export const authDeleteTodo = (uid) => {
  return deleteTodo(auth, uid);
};

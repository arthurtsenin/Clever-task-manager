import { getAuth } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from '@api/firebase.config';
import { readTodos } from '@api/todosHelper';

export const auth = getAuth(app);

export const createUser = (email, password) => {
  localStorage.setItem('user', JSON.stringify(email));
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  localStorage.setItem('user', JSON.stringify(email));
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  localStorage.removeItem('user');
  return signOut(auth);
};

export const authState = (addUser) => {
  return onAuthStateChanged(auth, addUser);
};

export const authCheck = (setTodos) => {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      readTodos(auth, setTodos);
    }
  });
};

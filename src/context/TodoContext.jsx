import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../api/firebase.config';
import { ref, onValue } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserTodo = () => {
  return useContext(UserContext);
};

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
          setTodos([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((todo) => {
              setTodos((oldArray) => [...oldArray, todo]);
            });
          }
        });
      } else if (!user) {
        navigate('/');
      }
    });
  }, []);
  return <UserContext.Provider value={{ todos }}>{children}</UserContext.Provider>;
};

import { createContext, useContext, useEffect, useState } from 'react';
import { authCheck } from '@Api/authHelper';

const UserContext = createContext();

export const UserTodo = () => {
  return useContext(UserContext);
};

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    authCheck(setTodos);
  }, []);

  return <UserContext.Provider value={{ todos }}>{children}</UserContext.Provider>;
};

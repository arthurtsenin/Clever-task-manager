import { createContext, useContext, useEffect, useState } from 'react';
import { createUser, signIn, logout, authState } from '@api/authHelper';
import { LOCAL_STORAGE_KEYS } from '@constants/localStorageKeys';

const UserContext = createContext();

export const UserAuth = () => {
  return useContext(UserContext);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEYS.user)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.user))
      : null
  );

  useEffect(() => {
    const unsubscribe = authState((currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

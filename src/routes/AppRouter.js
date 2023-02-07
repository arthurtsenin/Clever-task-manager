import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../constants/routes';
import { UserAuth } from '../context/AuthContext';

export const AppRouter = () => {
  const { user } = UserAuth();

  return (
    <Routes>
      {user
        ? privateRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))
        : publicRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
    </Routes>
  );
};

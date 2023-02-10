import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '@Constants/routes';
import { UserAuth } from '@Context/AuthContext';

export const AppRouter = () => {
  const { user } = UserAuth();

  const currentRoutes = user ? privateRoutes : publicRoutes;

  return (
    <Routes>
      {currentRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

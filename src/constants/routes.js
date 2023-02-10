import { Navigate } from 'react-router-dom';
import { SigninPage } from '@pages/SigninPage/SigninPage';
import { SignupPage } from '@pages/SignupPage/SignupPage';
import { HomePage } from '@pages/HomePage/HomePage';

export const routes = {
  SIGN_IN: '/',
  SIGN_UP: '/signup',
  ACCOUNT: '/account',
  NOT_FOUND: '*',
};

export const publicRoutes = [
  { path: routes.SIGN_IN, element: <SigninPage /> },
  { path: routes.SIGN_UP, element: <SignupPage /> },
  {
    path: routes.NOT_FOUND,
    element: <Navigate to={routes.SIGN_IN} replace />,
  },
];

export const privateRoutes = [
  { path: routes.ACCOUNT, element: <HomePage /> },
  {
    path: routes.NOT_FOUND,
    element: <Navigate to={routes.ACCOUNT} replace />,
  },
];

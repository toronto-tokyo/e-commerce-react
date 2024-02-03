import { createBrowserRouter } from 'react-router-dom';

import RootLayout from 'layouts/RootLayout';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import AuthPrivateRoute from 'hoc/AuthPrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'sign-in',
        element: (
          <AuthPrivateRoute>
            <SignInPage />
          </AuthPrivateRoute>
        ),
      },
      {
        path: 'sign-up',
        element: (
          <AuthPrivateRoute>
            <SignUpPage />
          </AuthPrivateRoute>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;

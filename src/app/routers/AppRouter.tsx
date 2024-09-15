import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from '../../pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: ':filter',
        element: <Home />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

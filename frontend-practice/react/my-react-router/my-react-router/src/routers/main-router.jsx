import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '~/routes/page';
import BoardLayout from '~/components/BoardLayout';
import BoardListPage from '../routes/board/page';
import BoardDetailPage from '../routes/board/detail/page';
import LoginPage from '../routes/login/page';
import SignUpPage from '../routes/signUp/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BoardLayout />,
    children: [
      { element: <MainPage />, index: true },
      {
        path: '/board',
        children: [
          {
            path: '',
            index: true,
            element: <BoardListPage />,
          },
          {
            path: ':boardId',
            element: <BoardDetailPage />,
          },
        ],
      },
      {
        path: '/login',
        element: <LoginPage />,
        index: true,
      },
      {
        path: '/signUp',
        element: <SignUpPage />,
        index: true,
      },
    ],
  },
]);
export default router;

// //Router: 각 URL에 따른 page 컴포넌트 연결

// import { createBrowserRouter } from "react-router-dom";
// import MainPage from "~/pages/MainPage";
// import SamplePage from "~/pages/SamplePage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainPage />,
//     index: true,
//   },
//   {
//     path: "/sample",
//     element: <SamplePage />,
//     index: true,
//   },
// ]);
// export default router;

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/routes/page";
import BoardListPage from "~/routes/board/page";

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainPage />,
    index: true,
  },
  {
    path:'/board',
    element: <BoardListPage />,
    index: true,
  }
])
export default router;
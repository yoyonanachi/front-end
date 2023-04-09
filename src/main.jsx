import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'

import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout, { RootIndex } from "./pages";
import About from "./pages/about";
import Zoo from "./pages/zoo"
import App from "./pages/app"
import Secret from "./pages/secret"

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <RootIndex /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/zoo",
        element: <Zoo />,
      },
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/secret",
        element: <Secret />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render
  (
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)
/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About"
import Project from "./pages/Project"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Project",
        element: <Project />,
      },
    //   {
    //     path: "/Contact",
    //     element: <Contact />,
    //   },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

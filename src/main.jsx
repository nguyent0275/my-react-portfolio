// react imports
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// pages imports
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume"

// project data for portfolio page
import projects from "./pages/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        element: <About />,
      },
      {
        index: true,
        path: "/About",
        element: <About />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio projects={projects} />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Services from "./pages/Services";
import Promociones from "./pages/Promociones";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/promociones",
    element: <Promociones />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

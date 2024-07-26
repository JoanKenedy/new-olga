import React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Services from "./pages/Services";
import Promociones from "./pages/Promociones";
import MaternoFetal from "./pages/MaternoFetal";
import Ginecologia from "./pages/Ginecologia";

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
  {
    path: "/services-obstetricia-materno-fetal",
    element: <MaternoFetal />,
  },
  {
    path: "/services-ginecologia",
    element: <Ginecologia />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

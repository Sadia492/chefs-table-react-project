import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recipes from "./components/Recipes.jsx";
import About from "./components/About.jsx";
import Search from "./components/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/recipes",
        loader: () => fetch("/recipes.json"),
        element: <Recipes></Recipes>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/search",
        element: <Search></Search>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

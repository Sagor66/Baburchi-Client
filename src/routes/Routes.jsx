import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/chef-recipes",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ':id',
        element: <ChefRecipes></ChefRecipes>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
      }
    ]
  },
]);

export default router;

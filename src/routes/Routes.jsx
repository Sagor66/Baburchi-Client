import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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

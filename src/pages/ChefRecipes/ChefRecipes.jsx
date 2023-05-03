import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefBanner from "./ChefBanner";
import ChefRecipe from "./ChefRecipe";

const ChefRecipes = () => {
  const { id } = useParams();
  const recipesData = useLoaderData();
  const recipes = recipesData.recipes;

  const [chefs, setChefs] = useState([]);

  const singleChef = chefs && chefs.find((chef) => parseInt(chef.id) === parseInt(id));
  // const singleRecipe = recipes.find(
  //   (recipe) => parseInt(recipesData.id) === parseInt(id)
  // );


  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div>
      {singleChef && <ChefBanner singleChef={singleChef}></ChefBanner>}
    </div>
  )
};

export default ChefRecipes;

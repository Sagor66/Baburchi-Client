import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefBanner from "./ChefBanner";
import ChefRecipe from "./ChefRecipe";

const ChefRecipes = () => {
  const { id } = useParams();
  const recipesData = useLoaderData();
  const recipes = recipesData.recipes;

  const [chefs, setChefs] = useState([]);

  const singleChef =
    chefs && chefs.find((chef) => parseInt(chef.id) === parseInt(id));

  useEffect(() => {
    fetch("https://b7a10-chef-recipe-hunter-server-side-sagor66-sagor66.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div>
      {singleChef && <ChefBanner singleChef={singleChef}></ChefBanner>}
      <div className="grid grid-cols-1 max-w-7xl mx-auto mb-32">
        <h2 className="section-header">Chef Recipes</h2>
        {recipes.map((recipe, i) => (
          <ChefRecipe key={i} recipe={recipe}></ChefRecipe>
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;

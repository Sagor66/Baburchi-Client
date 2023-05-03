import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const ChefRecipe = ({ recipe }) => {
  const { recipe_name, recipe_image, ingredients, cooking_method, rating } =
    recipe;

  const [active, setActive] = useState(true)

  const notify = () => {
    toast.success("Added To Favorites");
    setActive(!active)
  };

  return (
    <div className="grid grid-cols-5 justify-between items-center mb-14 shadow-2xl px-8 py-6 pr-14 rounded-lg">
      <div className="col-span-2">
        <img
          className="w-[420px] h-[420px] object-cover rounded-lg"
          src={recipe_image}
          alt=""
        />
      </div>
      <div className="col-span-3">
        <h3 className="text-3xl font-bold mb-4">{recipe_name}</h3>
        <div className="mb-4">
          <h4 className="text-2xl font-semibold mb-2">Ingredients</h4>
          <ul className="pl-2">
            {ingredients.map((ingredient, i) => (
              <li key={i} className="text-sm">
                <FontAwesomeIcon
                  className="text-red-700 pr-2"
                  icon={faArrowRight}
                />
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="text-2xl font-semibold mb-2">Culinary</h4>
          <p className="text-gray-600">{cooking_method}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2">
            <span className="font-semibold">Rating:</span>
            <span>{rating}</span>
            <span>
              <Rating
                placeholderRating={rating}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              ></Rating>
            </span>
          </p>
          <Toaster position="top-center" reverseOrder={false} />
          <button disabled={active ? false : true} onClick={notify} className={`${active ? "btn-primary" : "btn-disabled"}`}>
            Add To Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;

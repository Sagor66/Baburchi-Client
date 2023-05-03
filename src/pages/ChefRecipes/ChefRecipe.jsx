import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";

const ChefRecipe = ({ recipe }) => {
  const { recipe_name, recipe_image, ingredients, cooking_method, rating } =
    recipe;

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
          <button className="btn-primary">Add To Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
  } = chef;

  return (
    <div className="shadow-xl hover:shadow-2xl hover:shadow-red-900 rounded-2xl flex flex-col items-center pb-12">
      <div className="mb-5 bg-red-100 w-full mx-auto flex justify-center rounded-t-2xl">
        <img className="max-h-64 max-w-96" src={chef_picture} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="">
          <h3 className="text-center text-2xl font-bold mb-5">{chef_name}</h3>
          <div className="chef-text">
            <FontAwesomeIcon className="icon fa-lg" icon={faCalendar} />
            <p>
              Years Of Experience:{" "}
              <span className="text-red-500">{years_of_experience}yrs</span>
            </p>
          </div>
          <div className="chef-text">
            <FontAwesomeIcon className="icon fa-lg" icon={faUtensils} />
            <p>
              Number Of Recipes:{" "}
              <span className="text-red-500">{number_of_recipes}</span>
            </p>
          </div>
          <div className="chef-text">
            <FontAwesomeIcon className="icon fa-lg" icon={faThumbsUp} />
            <p>
              Likes: <span className="text-red-500">{likes}</span>
            </p>
          </div>
        </div>
        <Link to={`/chef-recipes/${id}`}>
          <button className="btn-primary mt-5 w-full">View Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default Chef;

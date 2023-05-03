import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const ChefBanner = ({ singleChef }) => {
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
    short_bio,
  } = singleChef;

  return (
    <div className="grid grid-cols-2 items-center text-white bg-red-800 px-20">
      <div className="mx-auto">
        <img className="w-[600px] h-[700px] object-cover" src={chef_picture} alt="" />
      </div>
      <div className="border-l-2 rounded-3xl pl-20">
        <h2 className="text-5xl font-bold text-clip-transparent bg-gradient-to-b from-white to-red-300 mb-10">{chef_name}</h2>
        <h4 className="text-xl font-thin mb-6">{short_bio}</h4>
        <div className="flex flex-col gap-3">
          <div className="chef-text">
            <FontAwesomeIcon className="icon fa-lg" icon={faCalendar} />
            <p className="text-white text-2xl">
              Years Of Experience:{" "}
              <span>{years_of_experience}yrs</span>
            </p>
          </div>
          <div className="chef-text">
            <FontAwesomeIcon className="icon fa-lg" icon={faUtensils} />
            <p className="text-white text-2xl">
              Number Of Recipes:{" "}
              <span>{number_of_recipes}</span>
            </p>
          </div>
          <div className="chef-text">
            <FontAwesomeIcon className="icon fa-lg" icon={faThumbsUp} />
            <p className="text-white text-2xl">
              Likes: <span>{likes}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;

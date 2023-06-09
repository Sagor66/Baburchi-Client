import React from "react";
import "./Banner.css";
import chefBanner from "../../assets/chef-banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner h-[1143px] flex flex-col md:flex-row justify-center items-center px-32 mb-32">
      <div className="text-center">
        <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 max-w-4xl leading-tight">
          Embark on a Culinary Journey Through{" "}
          <span className="text-clip-transparent bg-gradient-to-bl from-red-600 to-green-700 tracking-wider">
            Bangladesh
          </span>
        </h2>
        <p className="text-2xl font-thin text-red-50 tracking-wide">
          Explore Our Chef-Approved Recipes and Savor <br /> The Authentic
          Flavors of the Region
        </p>
        <Link to='/register'>
          <button className="btn-primary px-16 mt-8">Join Us</button>
        </Link>
      </div>
      <img
        className="h-[750px] hidden md:block border-r-8 border-red-800 rounded-full"
        src={chefBanner}
        alt=""
      />
    </div>
  );
};

export default Banner;

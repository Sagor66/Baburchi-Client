import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext)
  
  return (
    <nav className="sticky top-0 bg-white flex justify-between items-center px-10 pt-6 pb-8 shadow-2xl">
      <Link to="/">
        <div className="flex items-center">
          <h3 className="text-5xl font-bold tracking-wide">
            <span className="underline underline-offset-8 decoration-8 decoration-red-500">
              Baburch
            </span>
            <span className="text-red-600">i</span>
          </h3>
          <img className="h-14 w-14" src="../../../public/chef.jpg" alt="" />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="text-xl text-red-600 font-semibold hover:underline hover:decoration-4 hover:decoration-red-600"
        >
          Home
        </Link>
        <Link
          className="text-xl text-red-600 font-semibold hover:underline hover:decoration-4 hover:decoration-red-600"
          to="/blog"
        >
          Blog
        </Link>
      </div>
      <div className="flex gap-10">
        <Link to="/register">
          <button className="btn-primary">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="btn-primary">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;

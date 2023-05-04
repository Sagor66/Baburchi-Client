import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import ActiveRoute from "../../routes/ActiveRoute";
import chefLogo from '../../../public/chef.jpg'


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [hover, setHover] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <nav className="md:sticky top-0 bg-white flex flex-col md:flex-row justify-between items-center px-10 pt-6 pb-8 shadow-2xl gap-5">
      <Link to="/">
        <div className="flex items-center">
          <h3 className="text-5xl font-bold tracking-wide">
            <span className="underline underline-offset-8 decoration-8 decoration-red-500">
              Baburch
            </span>
            <span className="text-red-600">i</span>
          </h3>
          <img className="h-14 w-14" src={chefLogo} alt="" />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <ActiveRoute
          to="/"
          className="text-xl text-red-600 font-semibold hover:underline hover:decoration-4 hover:decoration-red-600"
        >
          Home
        </ActiveRoute>
        <ActiveRoute
          className="text-xl text-red-600 font-semibold hover:underline hover:decoration-4 hover:decoration-red-600"
          to="/blog"
        >
          Blog
        </ActiveRoute>
      </div>

      <div className="w-[300px]">
        {user ? (
          <div className="flex items-center gap-8">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <p className="w-[60px] h-[60px] text-red-600">{user.displayName}</p>
              ) : (
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              )}
            </div>
            <button onClick={() => handleLogOut()} className="btn-primary">
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-10">
            <Link to="/register">
              <button className="btn-primary">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="btn-primary">Login</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

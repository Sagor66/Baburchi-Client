import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.url.value;

    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
        updateUserData(result.user, name, photoURL);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));

    const updateUserData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => console.log("user name updated"))
        .catch((error) => console.log(error.message));
    };
  };

  return (
    <div className="max-w-5xl mx-auto my-32 border-4 border-red-600 p-10 rounded-lg">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-8">
        Sign Up
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-2 w-fit">
        <label className="max-w-[400px] form-label inline-block">
          <span className="text-xl font-medium p-2 inline-block">Name</span>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </label>
        <label className="max-w-[400px] form-label inline-block">
          <span className="text-xl font-medium p-2 inline-block">Email</span>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </label>
        <label className="max-w-[400px] form-label inline-block">
          <span className="text-xl font-medium p-2 inline-block">Password</span>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </label>
        <label className="max-w-[400px] form-label inline-block">
          <span className="text-xl font-medium p-2 inline-block">
            Photo URL
          </span>
          <input
            className="form-input"
            type="text"
            name="url"
            placeholder="Photo URL"
            required
          />
        </label>
        <input className="btn-primary mt-8" type="submit" value="Sign Up" />
        <p className="text-right mt-3">
          Already have an account?{" "}
          <Link className="text-red-600" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

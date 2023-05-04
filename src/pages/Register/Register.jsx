import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const name = form.name.value;
    const photoURL = form.url.value;

    setError('')

    if (password === confirmPassword) {
      createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
        updateUserData(result.user, name, photoURL);
        navigate(from, { replace: true });
        form.reset()
      })
      .catch((error) => {
        if (password.length < 6) {
          setError(`Pass too short! Minimum 6 characters needed \n${error.message}`)
        } else {
          setError(error.message)
        }
        console.log(error.message)
      });
    } else {
      setError(`Password and Confirm Password fields expect same value \n${error.message}`)
    }
    

    const updateUserData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => console.log("user name updated"))
        .catch((error) => {
          console.log(error.message)
        });
    };
  };

  return (
    <div className="md:max-w-5xl mx-auto my-32 border-4 border-red-600 p-10 rounded-lg">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-8">
        Sign Up
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-2">
        <label className="w-[300px] md:w-[400px] form-label md:inline-block">
          <span className="text-xl font-medium p-2 md:inline-block">Name</span>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </label>
        <label className="w-[300px] md:w-[400px] form-label md:inline-block">
          <span className="text-xl font-medium p-2 md:inline-block">Email</span>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </label>
        <label className="w-[300px] md:w-[400px] form-label md:inline-block">
          <span className="text-xl font-medium p-2 md:inline-block">Password</span>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </label>
        <label className="w-[300px] md:w-[400px] form-label md:inline-block">
          <span className="text-xl font-medium p-2 md:inline-block">Confirm Password</span>
          <input
            className="form-input"
            type="password"
            name="confirmPassword"
            placeholder="Enter Password"
            required
          />
        </label>
        <label className="w-[300px] md:w-[400px] form-label md:inline-block">
          <span className="text-xl font-medium p-2 md:inline-block">
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
      <p className="text-sm text-red-600 max-w-sm mt-8">{error}</p>
    </div>
  );
};

export default Register;

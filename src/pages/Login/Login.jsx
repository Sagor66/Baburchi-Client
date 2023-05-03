import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    setError('')

    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message)
        console.log(error.message)
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      const loggedInUser = result.user
      navigate(from, { replace: true });
      console.log(loggedInUser)
    })
    .catch((error) => {
      setError(error.message)
      console.log(error.message)
    });
  }

  const handleGithubSignIn = () => {
    githubSignIn()
    .then((result) => {
      const loggedInUser = result.user
      navigate(from, { replace: true });
      console.log(loggedInUser)
    })
    .catch((error) => {
      setError(error.message)
      console.log(error.message)
    });
  }

  return (
    <div className="max-w-5xl mx-auto my-32 border-4 border-red-600 p-10 rounded-lg">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-8">
        Login
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-2 w-fit">
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
        <input className="btn-primary mt-8" type="submit" value="Login" />
        <p className="text-right mt-3">
          Don't have an account?{" "}
          <Link className="text-red-600" to="/register">
            Register
          </Link>
        </p>
      </form>
      <div className="flex justify-start items-center mt-10 gap-5">
        <p>Sign-in with</p>
        <div>
          <button onClick={() => handleGoogleSignIn()}>
            <FontAwesomeIcon className="icon fa-lg mr-4" icon={faGoogle} />
          </button>
          <button onClick={() => handleGithubSignIn()}>
            <FontAwesomeIcon className="icon fa-lg" icon={faGithub} />
          </button>
        </div>
      </div>
      <p className="text-sm text-red-600 max-w-sm mt-8">{error}</p>
    </div>
  );
};

export default Login;

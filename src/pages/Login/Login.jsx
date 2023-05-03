import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from.pathname || '/'

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    console.log(email, password)

    signInUser(email, password)
    .then(result => {
      const loggedInUser = result.user
      console.log(loggedInUser)
      navigate(from, {replace: true})
    })
    .catch(error => console.log(error.message))
  }


  return (
    <div className="max-w-5xl mx-auto my-32 border-4 border-red-600 p-10 rounded-lg">
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-fit">
        <label className="max-w-[400px] form-label">
          Email: 
          <input className="form-input" type="email" name="email" placeholder="Email Address" required/>
        </label>
        <label className="max-w-[400px] form-label">
          Password: 
          <input className="form-input" type="password" name="password" placeholder="Enter Password" required/>
        </label>
        <input className="btn-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;

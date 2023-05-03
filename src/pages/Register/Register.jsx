import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext)

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    const name = form.name.value
    const photoURL = form.url.value

    console.log(email, password, name, photoURL)

    createUser(email, password)
    .then(result => {
      const createUser = result.user;
      console.log(createUser)
    })
    .catch(error => console.log(error.message))

    
  }


  return (
    <div className="max-w-5xl mx-auto my-32 border-4 border-red-600 p-10 rounded-lg">
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-fit">
        <label className="max-w-[400px] form-label">
          Name: 
          <input className="form-input" type="text" name="name" placeholder="Your Name" required/>
        </label>
        <label className="max-w-[400px] form-label">
          Email: 
          <input className="form-input" type="email" name="email" placeholder="Email Address" required/>
        </label>
        <label className="max-w-[400px] form-label">
          Password: 
          <input className="form-input" type="password" name="password" placeholder="Enter Password" required/>
        </label>
        <label className="max-w-[400px] form-label">
          Photo URL: 
          <input className="form-input" type="text" name="url" placeholder="Photo URL" required/>
        </label>
        <input className="btn-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
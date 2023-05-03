import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveRoute = ({ to, children }) => {
  return (
    <div>
      <NavLink to={to} className={({ isActive }) => isActive ? "text-xl text-red-600 font-semibold underline decoration-4 decoration-red-600" : "text-xl text-red-600 font-semibold hover:underline hover:decoration-4 hover:decoration-red-600"}>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveRoute;
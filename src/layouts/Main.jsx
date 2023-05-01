import React from "react";
import Header from "../pages/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer className="mt-auto"></Footer>
    </div>
  );
};

export default Main;

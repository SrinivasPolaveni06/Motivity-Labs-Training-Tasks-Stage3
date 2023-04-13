import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../Images/pizza logo.png";
const index = () => {
  return (
    <div>
      <nav className="navbar bg-light ps-3 pe-3">
        <img src={Logo} className="Logo" alt="pizzalogo" height="40px" />

        <a className="navbar-brand me-auto" href="/">
          <b>Pizza Customization</b>
        </a>
      </nav>
      <div className="container3">
      <Outlet />
      </div>
      
    </div>
  );
};
export default index;

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="nav-wrapper grey darken-4">
        <NavLink
          to="/"
          className="brand-logo center"
          style={{ fontFamily: "Megrim" }}
        >
          advice
        </NavLink>
        <ul id="nav-mobile" className="right ">
          <li>
            <NavLink to="/version" style={{ fontFamily: "Cairo" }}>
              ABOUT
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

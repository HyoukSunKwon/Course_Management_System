import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink activeStyle={activeStyle} to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/courses">
        Course
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/students">
        Student
      </NavLink>
    </nav>
  );
}

export default Header;

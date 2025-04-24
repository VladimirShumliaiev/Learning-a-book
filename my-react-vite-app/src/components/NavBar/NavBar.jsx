import React from "react";
import { NavLink } from "react-router";
import "./NavBar.css";

const NavBar = () => {
  const isActive = ({ isActive }) => (isActive ? "navItem-active-link" : "");
  return (
    <div className={"navItem"}>
      <div>
        <NavLink className={isActive} to={"quiz"}>
          {" "}
          Quiz
        </NavLink>
      </div>
      <div>
        <NavLink className={isActive} to={"test"}>
          {" "}
          Test
        </NavLink>
      </div>
      <div>
        <NavLink className={isActive} to={"object"}>
          {" "}
          Object
        </NavLink>
      </div>
      <div>
        <NavLink className={isActive} to={"function"}>
          {" "}
          Function
        </NavLink>
      </div>
      <div>
        <NavLink className={isActive} to={"clock"}>
          {" "}
          Clock
        </NavLink>
      </div>
      <div>
        <NavLink className={isActive} to={"example"}>
          {" "}
          Example
        </NavLink>
        <div>
          {""}
          <NavLink>Hello</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

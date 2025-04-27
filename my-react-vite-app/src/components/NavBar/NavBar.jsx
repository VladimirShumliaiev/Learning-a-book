import React from "react";
import { NavLink } from "react-router";
import "./NavBar.css";

const NavBar = () => {
  const active = ({ isActive }) => (isActive ? "navItem-active-link" : "");
  return (
    <div className={"navItem"}>
      <div>
        <NavLink className={active} to={"quiz"}>
          {" "}
          Quiz
        </NavLink>
      </div>
      <div>
        <NavLink className={active} to={"test"}>
          {" "}
          Test
        </NavLink>
      </div>
      <div>
        <NavLink className={active} to={"object"}>
          {" "}
          Object
        </NavLink>
      </div>
      <div>
        <NavLink className={active} to={"function"}>
          {" "}
          Function
        </NavLink>
      </div>
      <div>
        <NavLink className={active} to={"clock"}>
          {" "}
          Clock
        </NavLink>
      </div>
      <div>
        <NavLink className={active} to={"example"}>
          {" "}
          Example
        </NavLink>
        <div>
          {""}
          <NavLink className={active} to={"hello"}>
            Hello World
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

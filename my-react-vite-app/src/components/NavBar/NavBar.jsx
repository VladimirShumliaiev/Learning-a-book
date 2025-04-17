import React from "react";
import { NavLink } from "react-router";
import style from "./NavBar.module.css";

const NavBar = () => {
  const isActive = ({ isActive }) => (isActive ? "item-active-link" : "");
  return (
    <div className={style.item}>
      <div>
        <NavLink className={isActive} to={"quiz"}>
          {" "}
          Quiz
        </NavLink>
      </div>
      <div>
        <NavLink to={"test"}> Test</NavLink>
      </div>
      <div>
        <NavLink to={"object"}> Object</NavLink>
      </div>
      <div>
        <NavLink to={"function"}> Function</NavLink>
      </div>
      <div>
        <NavLink to={"clock"}> Clock</NavLink>
      </div>
      <div>
        <NavLink className={style.item} to={"example"}>
          {" "}
          Example
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;

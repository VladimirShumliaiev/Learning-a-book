import React from "react";
import { NavLink } from "react-router";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div>
        <NavLink className={style.item} to={"quiz"}>
          {" "}
          Quiz
        </NavLink>
      </div>
      <div>
        <NavLink className={style.item} to={"test"}>
          {" "}
          Test
        </NavLink>
      </div>
      <div>
        <NavLink className={style.item} to={"object"}>
          {" "}
          Object
        </NavLink>
      </div>
      <div>
        <NavLink className={style.item} to={"function"}>
          {" "}
          Function
        </NavLink>
      </div>
      <div>
        <NavLink className={style.item} to={"clock"}>
          {" "}
          Clock
        </NavLink>
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

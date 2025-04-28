import { NavLink } from "react-router";
import style from "./NavBar.module.css";

const NavBar = () => {
  const activeNavBar = ({ isActive }) => (isActive ? "navBar-link" : "");
  return (
    <div className={style.item}>
      <div>
        <NavLink className={activeNavBar} to={"quiz"}>
          {" "}
          Quiz
        </NavLink>
      </div>
      <div>
        <NavLink className={activeNavBar} to={"test"}>
          {" "}
          Test
        </NavLink>
      </div>
      <div>
        <NavLink className={activeNavBar} to={"object"}>
          {" "}
          Object
        </NavLink>
      </div>
      <div>
        <NavLink className={activeNavBar} to={"function"}>
          {" "}
          Function
        </NavLink>
      </div>
      <div>
        <NavLink className={activeNavBar} to={"clock"}>
          {" "}
          Clock
        </NavLink>
      </div>
      <div>
        <NavLink className={activeNavBar} to={"example"}>
          {" "}
          Example
        </NavLink>
        <div>
          {""}
          <NavLink className={activeNavBar} to={"hello"}>
            Todo
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

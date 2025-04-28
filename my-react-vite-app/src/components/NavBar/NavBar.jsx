import { NavLink } from "react-router";
import "./NavBar.css";

const NavBar = () => {

  return (
    <div className={"navItem"}>
      <div>
        <NavLink className={} to={"quiz"}>
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
          <NavLink className={isActive} to={"hello"}>
            Todo
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

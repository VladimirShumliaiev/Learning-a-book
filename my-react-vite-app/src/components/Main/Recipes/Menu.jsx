import React from "react";
import data from "./data";
import Recipe from "./Recipe";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={style.item}>
      <header>
        <h3>Delicious Recipes</h3>
        <hr />
      </header>
      {data.map((recipe, i) => (
        <Recipe key={i} {...recipe} />
      ))}
    </div>
  );
};

export default Menu;

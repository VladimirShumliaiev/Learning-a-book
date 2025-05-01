import React from "react";
import data from "./data.js";
import Recipe from "./Recipe.jsx";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={style.item}>
      <header>
        <h2>Delicious Recipes</h2>
      </header>
      {data.map((recipe, i) => (
        <Recipe key={i} {...recipe} />
      ))}
    </div>
  );
};

export default Menu;

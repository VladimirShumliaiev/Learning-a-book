import React from "react";
import data from "./data";
import Recipe from "./Recipe";

const Menu = () => {
  return (
    <div>
      <header>
        <h3>Delicious Recipes</h3>
      </header>
      {data.map((recipe, i) => (
        <Recipe key={i} {...recipe} />
      ))}
    </div>
  );
};

export default Menu;

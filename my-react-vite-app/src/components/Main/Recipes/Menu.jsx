import React from "react";
import data from "./data";
import Recipe from "./Recipe";

const Menu = () => {
  return (
    <div>
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

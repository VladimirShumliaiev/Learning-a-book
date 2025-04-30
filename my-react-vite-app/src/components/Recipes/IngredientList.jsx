import React from "react";
import Ingredients from "./Ingredients.jsx";

const IngredientList = ({ list, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      {list.map((ingredients, i) => (
        <Ingredients key={i} {...ingredients} />
      ))}
    </div>
  );
};

export default IngredientList;

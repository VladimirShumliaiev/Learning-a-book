import React from "react";
import Ingredients from "./Ingredients";

const IngredientList = ({ list, title }) => {
  return (
    <ul>
      <h3>{title}</h3>
      {list.map((ingredients, i) => (
        <Ingredients key={i} {...ingredients} />
      ))}
    </ul>
  );
};

export default IngredientList;

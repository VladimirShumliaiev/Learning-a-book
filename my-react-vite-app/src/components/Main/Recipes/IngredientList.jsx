import React from "react";
import Ingredients from "./Ingredients";

const IngredientList = ({ list, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {list.map((ingredients, i) => (
          <Ingredients key={i} {...ingredients} />
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;

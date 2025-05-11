import React from "react";
import Ingredients from "./Ingredients";

const IngredientList = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((ingredients, i) => (
          <Ingredients key={i} {...ingredients} />
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;

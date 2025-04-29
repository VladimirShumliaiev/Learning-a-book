import React from "react";
import Ingredients from "./Ingredients";

const IngredientList = ({ list }) => {
  return (
    <>
      <h1>Cooking Instructions</h1>
      <ul>
        {list.map((ingredients, i) => (
          <Ingredients key={i} {...ingredients} />
        ))}
      </ul>
    </>
  );
};

export default IngredientList;

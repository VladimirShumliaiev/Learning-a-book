import React from "react";
import Ingredients from "./Ingredients";

const IngredientList = ({ title, list }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {list.map((ingredients, i) => (
          <Ingredients key={i} {...ingredients} />
        ))}
      </ul>
    </>
  );
};

export default IngredientList;

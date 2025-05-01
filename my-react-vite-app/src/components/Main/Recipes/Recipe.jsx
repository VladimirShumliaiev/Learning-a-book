import React from "react";
import IngredientList from "./IngredientList.jsx";
import Instructions from "./Instructions.jsx";

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <>
      <h2>{name}</h2>
      <IngredientList title="Ingredients" list={ingredients} />
      <Instructions title="Cooking Instructions" list={steps} />
    </>
  );
};

export default Recipe;

import React from "react";
import IngredientsList from "./IngredientList";
import Instructions from "./Instructions";
const Recipe = ({ name, ingredients, steps }) => {
  return (
    <div>
      <h3>{name}</h3>
      <IngredientsList title="Ingredients" list={ingredients} />
      <Instructions instructions={steps} />
    </div>
  );
};

export default Recipe;

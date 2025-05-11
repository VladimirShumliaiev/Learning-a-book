import React from "react";
import IngredientList from "./IngredientList";
import Instruction from "./Instructions";

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <div>
      {name}
      <IngredientList list={ingredients} />
      <Instruction list={steps} />
    </div>
  );
};

export default Recipe;

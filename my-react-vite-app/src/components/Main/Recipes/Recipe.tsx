import React, { FC } from "react";
import IngredientList from "./IngredientList";
import Instruction from "./Instructions";

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <div>
      <h2>{name}</h2>
      <IngredientList title={"Ingredients"} list={ingredients} />
      <Instruction title={"Cooking instructions"} list={steps} />
    </div>
  );
};

export default Recipe;

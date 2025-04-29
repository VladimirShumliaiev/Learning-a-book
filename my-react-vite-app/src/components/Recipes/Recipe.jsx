import React from "react";
import style from "./Menu.module.css";

import Instructions from "./Instructions";
import IngredientList from "./IngredientList";

const Recipe = (props) => {
  const { name, ingredients, steps } = props;
  return (
    <div className={style.item}>
      <section>
        <h1>{name}</h1>
        <IngredientList list={ingredients} />
      </section>
      <section className={style.instructions}>
        <Instructions steps={steps} />
      </section>
    </div>
  );
};

export default Recipe;

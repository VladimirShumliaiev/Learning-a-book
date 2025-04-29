import React from "react";
import style from "./Menu.module.css";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const Recipe = (props) => {
  const { name, ingredients, steps } = props;
  return (
    <div className={style.item}>
      <section>
        <h1>{name}</h1>
        <ul>
          {ingredients.map((ingredients, i) => (
            <li key={i}>
              <Ingredients {...ingredients} />
            </li>
          ))}
        </ul>
      </section>
      <section className={style.instructions}>
        <h1>Cooking Instructions</h1>
        <Instructions steps={steps} />
      </section>
    </div>
  );
};

export default Recipe;

import React, { FC } from "react";
import style from "./Menu.module.css";
import Ingredients from "./Ingredients";

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
      <section>
        <h1>Cooking Instructions</h1>
        {steps.map((steps, i) => (
          <p key={i}>{steps}</p>
        ))}
      </section>
    </div>
  );
};

export default Recipe;

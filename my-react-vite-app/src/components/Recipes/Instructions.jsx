import React from "react";
import style from "./Menu.module.css";

const Instructions = ({ title, instructions }) => {
  return (
    <div className={style.instructions}>
      <h3>{title}</h3>
      {instructions.map((instructions, i) => (
        <p key={i}>{instructions}</p>
      ))}
    </div>
  );
};

export default Instructions;

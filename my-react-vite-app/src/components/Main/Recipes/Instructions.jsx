import React from "react";
import style from "./Menu.module.css";

const Instructions = ({ list, title }) => {
  return (
    <div className={style.instructions}>
      <h2>{title}</h2>
      {list.map((instructions, i) => (
        <p key={i}>{instructions}</p>
      ))}
    </div>
  );
};

export default Instructions;

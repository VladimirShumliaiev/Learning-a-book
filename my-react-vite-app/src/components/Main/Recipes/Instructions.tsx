import React from "react";
import style from "./Menu.module.css";

const Instructions = ({ list, title }) => {
  return (
    <div className={style.instructions}>
      <h3>{title}</h3>
      {list.map((instructions, i) => (
        <p key={i}>{instructions}</p>
      ))}
    </div>
  );
};

export default Instructions;

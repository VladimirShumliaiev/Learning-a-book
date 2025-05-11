import React from "react";
import style from "./Menu.module.css";

const Instructions = ({ list }) => {
  return (
    <div className={style.instructions}>
      {list.map((instructions, i) => (
        <p key={i}>{instructions}</p>
      ))}
    </div>
  );
};

export default Instructions;

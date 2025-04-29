import React from "react";
import data from "./data";

const Instructions = () => {
  return (
    <div>
      {data.steps.map((steps, i) => (
        <div key={i}>{steps}</div>
      ))}
    </div>
  );
};

export default Instructions;

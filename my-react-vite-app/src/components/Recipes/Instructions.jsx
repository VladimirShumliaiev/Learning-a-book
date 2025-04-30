import React from "react";

const Instructions = ({ instructions }) => {
  return (
    <div>
      <h3>Instructions</h3>
      {instructions.map((instructions, i) => (
        <p key={i}>{instructions}</p>
      ))}
    </div>
  );
};

export default Instructions;

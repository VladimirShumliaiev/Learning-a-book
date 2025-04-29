import React from "react";

const Instructions = ({ steps }) => {
  return (
    <>
      <h1>Cooking Instructions</h1>
      {steps.map((steps, i) => (
        <p key={i}>{steps}</p>
      ))}
    </>
  );
};

export default Instructions;

import React from "react";

const Instructions = ({ steps }) => {
  return (
    <>
      {steps.map((steps, i) => (
        <p key={i}>{steps}</p>
      ))}
    </>
  );
};

export default Instructions;

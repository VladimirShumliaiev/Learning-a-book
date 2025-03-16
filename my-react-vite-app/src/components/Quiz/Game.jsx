import React from "react";

const Game = (question, onClickVariants) => {
  return (
    <div>
      <h3>{question.title}</h3>
      {question.variants.map((e, index) => (
        <li key={index}>{}</li>
      ))}
    </div>
  );
};

export default Game;

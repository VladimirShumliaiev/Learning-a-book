import React, { useState } from "react";

const Test = () => {
  const [state, setState] = useState(0);

  const onClickPlus = () => {
    setState(state + 1);
  };

  const onClickMinus = () => {
    setState(state - 1);
  };
  return (
    <div>
      <button onClick={onClickPlus}> Plus </button>
      {state}
      <button onClick={onClickMinus}> Minus </button>
    </div>
  );
};

export default Test;

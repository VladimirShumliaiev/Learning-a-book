import React, { useState } from "react";
import styles from './Test'

const Test = () => {
  const [state, setState] = useState(0);

  const onClickPlus = () => {
    setState(state + 1);

    if (state >= 5) {
      setState(0);
    }
  };

  const onClickMinus = () => {
    setState(state - 1);

    if (state <= -5) {
      setState(0);
    }
  };
  return (
    <div className={}>
      <button onClick={onClickPlus}> Plus </button> {state}{" "}
      <button onClick={onClickMinus}> Minus </button>
    </div>
  );
};

export default Test;

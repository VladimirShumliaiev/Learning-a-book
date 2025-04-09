import React, { useState } from "react";
import styles from "./Test.module.css";

// type IsActiveProps = {
//   isActive: boolean,
// };

const Test = () => {
  const [state, setState] = useState(0);

  const isActivePlus = ({ isActivePlus }) => (isActivePlus ? "activePlus" : "");
  const isActiveMinus = ({ isActiveMinus }) =>
    isActiveMinus ? "activeMinus" : "";

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
    <div className={styles.item}>
      <button className={isActivePlus} onClick={onClickPlus}>
        {" "}
        Plus{" "}
      </button>{" "}
      {state}{" "}
      <button className={isActiveMinus} onClick={onClickMinus}>
        {" "}
        Minus{" "}
      </button>
    </div>
  );
};

export default Test;

import React, { useState } from "react";
import { testList } from "./testList";
import './Test.css'



const Test = () => {
  const [state, setState] = useState(0);
  const [color,setColor] = useState('')

  const onClickButton = (value: string) => {
      setColor(value)
  }

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
    <div>
      <button onClick={onClickPlus}> Plus </button> {state}{" "}
      <button onClick={onClickMinus}> Minus </button>
      <br />
      <button className={color === testList.plus ? "testActivePlus" : ""} onClick={() => onClickButton(testList.plus)}>
        {testList.plus}
      </button>
      <button className={color === testList.minus ? "testActiveMinus" : ""} onClick={() => onClickButton(testList.minus)}>
        {testList.minus}
      </button>
    </div>
  );
};

export default Test;

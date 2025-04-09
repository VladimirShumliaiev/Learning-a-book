import React, { useState } from "react";
import ButtonColor from "./ButtonColor";
import './ButtonColor.css'

const Button = () => {
  const [state, setState] = useState("");
  return (
    <div>
      <ButtonColor state={state} setState={setState} />
    </div>
  );
};

export default Button;

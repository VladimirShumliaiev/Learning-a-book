import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [colorButton, setColorButton] = useState("");

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={handlePlus}>Plus</button> {count}{" "}
      <button onClick={handleMinus}> Minus</button>
      <div>
        color:
        <button className={colorButton === 'a' ? } onClick={() => setColorButton('a')}>a</button>
        <button  onClick={() => setColorButton('b')}>b</button>
        <button  onClick={() => setColorButton('c')}>c</button>
        <button  onClick={() => setColorButton('d')}>d</button>
        <button  onClick={() => setColorButton('f')}>f</button>
      </div>
    </div>
  );
};

export default Test;

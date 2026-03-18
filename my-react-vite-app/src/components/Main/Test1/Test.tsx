import React, { useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  const handlePlus = () => {
    setCount(count + 1);
    if (count >= 5) {
      window.alert("!");
      setCount(0);
    }
  };
  const handleMinus = () => {
    setCount(count - 1);
    if (count <= -5) {
      window.alert("!!");
      setCount(0);
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMinus}>-</button>
        {count}
        <button onClick={handlePlus}>+</button>
      </div>

      <div>
        <div>color:</div>
        <button className={color === "one" ? "one-color" : ""}>1</button>
        <button className={color === "two" ? "two-color" : ""}>2</button>
        <button className={color === "three" ? "three-color" : ""}>3</button>
        <button className={color === "four" ? "four-color" : ""}>4</button>
        <button className={color === "five" ? "five-color" : ""}>5</button>
      </div>
    </div>
  );
}

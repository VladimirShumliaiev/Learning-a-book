import React, { useState } from "react";
import "./Test.css";

const Test = () => {
  const [color, setColor] = useState("five");
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button
        onClick={() => setColor("one")}
        className={color === "one" ? "one-color" : ""}
      >
        1
      </button>
      <button
        onClick={() => setColor("two")}
        className={color === "two" ? "two-color" : ""}
      >
        2
      </button>
      <button
        onClick={() => setColor("three")}
        className={color === "three" ? "three-color" : ""}
      >
        3
      </button>
      <button
        onClick={() => setColor("four")}
        className={color === "four" ? "four-color" : ""}
      >
        4
      </button>
      <button
        onClick={() => setColor("five")}
        className={color === "five" ? "five-color" : ""}
      >
        5
      </button>

      <div>
        count: <button onClick={handlePlus}>+</button> {count}
        <button onClick={handleMinus}>-</button>
      </div>
    </div>
  );
};

export default Test;

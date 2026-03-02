import React, { useState } from "react";
import "./Test.css";

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
        <button
          className={colorButton === "a" ? "one-color" : ""}
          onClick={() => setColorButton("a")}
        >
          a
        </button>
        <button
          className={colorButton === "b" ? "two-color" : ""}
          onClick={() => setColorButton("b")}
        >
          b
        </button>
        <button
          className={colorButton === "c" ? "three-color" : ""}
          onClick={() => setColorButton("c")}
        >
          c
        </button>
        <button
          className={colorButton === "d" ? "four-color" : ""}
          onClick={() => setColorButton("d")}
        >
          D
        </button>
        <button
          className={colorButton === "f" ? "five-color" : ""}
          onClick={() => setColorButton("f")}
        >
          F
        </button>
      </div>
    </div>
  );
};

export default Test;

import React, { useState } from "react";
import "./Test.css";

const Test = () => {
  const [color, setColor] = useState("three");
  const [count, setCount] = useState(0);

  const plusHandle = () => {
    setCount(count + 1);
    if (count >= 5) {
      setCount(0);
    }

      const minusHandle = () => {
    setCount(count - 1);
    if (count >= 5) {
      setCount(0);
    }
  };
  return (
    <div>
      <button
        className={color === "one" ? "one-color" : ""}
        onClick={() => setColor("one")}
      >
        a
      </button>
      <button
        className={color === "two" ? "two-color" : ""}
        onClick={() => setColor("two")}
      >
        b
      </button>
      <button
        className={color === "three" ? "three-color" : ""}
        onClick={() => setColor("three")}
      >
        c
      </button>
      <button
        className={color === "four" ? "four-color" : ""}
        onClick={() => setColor("four")}
      >
        d
      </button>
      <button
        className={color === "five" ? "five-color" : ""}
        onClick={() => setColor("five")}
      >
        f
      </button>
      <div>
        Count:
        <button>-</button> {count} <button>+</button>
      </div>
    </div>
  );
};

export default Test;

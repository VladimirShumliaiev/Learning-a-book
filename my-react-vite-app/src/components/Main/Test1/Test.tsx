import React, { useState } from "react";
import "./Test.css";

const Test = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("three");

  const plusHandle = () => {
    setCount(count + 1);
    if (count >= 10) {
      window.alert("!");
      setCount(0);
    }
  };
  const minusHandle = () => {
    setCount(count - 1);
    if (count <= -10) {
      window.alert("!");
      setCount(0);
    }
  };
  return (
    <div>
      <div>
        <button onClick={plusHandle}> + </button> {count}{" "}
        <button onClick={minusHandle}> - </button>
      </div>
      color:
      <div>
        <button
          className={color === "one" ? "one-color" : ""}
          onClick={() => setColor("one")}
        >
          1
        </button>
        <button
          className={color === "two" ? "two-color" : ""}
          onClick={() => setColor("two")}
        >
          2
        </button>
        <button
          className={color === "three" ? "three-color" : ""}
          onClick={() => setColor("three")}
        >
          3
        </button>
        <button
          className={color === "four" ? "four-color" : ""}
          onClick={() => setColor("f")}
        >
          4
        </button>
        <button
          className={color === "five" ? "five-color" : ""}
          onClick={() => setColor("five")}
        >
          5
        </button>
      </div>
    </div>
  );
};

export default Test;

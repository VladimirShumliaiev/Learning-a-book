import React, { useState } from "react";
import "./Test.css";

const Test = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("three");

  const handlerPlus = () => {
    setCount(count + 1);
    if (count >= 12) {
      setCount(0);
    }
  };

  const handlerMinus = () => {
    setCount(count - 1);
    if (count <= -11) {
      window.confirm("rest 0");
      setCount(0);
    }
  };

  return (
    <div>
      Counter:
      <div>
        <button onClick={handlerPlus}>plus +</button> {count}{" "}
        <button onClick={handlerMinus}>- minus</button>
      </div>
      Color active:
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
          onClick={() => setColor("four")}
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

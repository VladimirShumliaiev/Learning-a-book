import React, { useState } from "react";
import "./Test.css";

const Test = () => {
  const [color, setColor] = useState("three");
  return (
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
  );
};

export default Test;

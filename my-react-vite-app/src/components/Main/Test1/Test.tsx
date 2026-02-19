import React, { useState } from "react";

const Test = () => {
  const [color, setColor] = useState("three");
  return (
    <div>
      <button
        onClick={() => setColor("one")}
        className={color === "one" ? "one-color" : ""}
      >
        1
      </button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  );
};

export default Test;

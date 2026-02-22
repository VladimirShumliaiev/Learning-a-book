import React, { useState } from "react";

const Test = () => {
  const [color, setColor] = useState("");

  const handleColor = () => {
    setColor("");
  };

  return (
    <div>
      <button onClick={} className={color === "one" ? "color-one" : ""}>
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

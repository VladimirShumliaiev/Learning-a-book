import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

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
    </div>
  );
};

export default Test;

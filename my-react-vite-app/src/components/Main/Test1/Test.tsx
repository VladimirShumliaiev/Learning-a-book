import React, { useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={handleMinus}>-</button>
      {count}
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

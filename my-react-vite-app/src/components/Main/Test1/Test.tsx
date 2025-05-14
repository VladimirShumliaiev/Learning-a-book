import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  const handlerPlus = () => {
    setCount(count + 1);
    if (count >= 20) {
      setCount(0);
    }
  };

  const handlerMinus = () => {
    setCount(count - 1);
    if (count <= -20) {
      window.confirm("rest 0");
      setCount(0);
    }
  };

  return (
    <div>
      Counter:
      <div>
        <button onClick={handlerMinus}>minus</button> {count}{" "}
        <button onClick={handlerPlus}>plus</button>
      </div>
    </div>
  );
};

export default Test;

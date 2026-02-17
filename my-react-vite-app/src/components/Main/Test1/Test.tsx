import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState();

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
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
    </div>
  );
};

export default Test;

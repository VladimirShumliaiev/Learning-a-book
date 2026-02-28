import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button>Plus</button> {count}
      <button> Minus</button>
    </div>
  );
};

export default Test;

import React, { useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

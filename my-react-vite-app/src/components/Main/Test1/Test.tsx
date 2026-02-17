import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  const plusHandle = () => {
    setCount(count + 1)
    if(count >= 10) {
      window.alert('!')
      setCount(0)
    }

    const minusHandle = () => {
    setCount(count - 1)
    if(count >= -10) {
      window.alert('!')
      setCount(0)
    }
  }
  return (
    <div>
      <button> + </button>
      {count}
      <button> - </button>
    </div>
  );
};

export default Test;

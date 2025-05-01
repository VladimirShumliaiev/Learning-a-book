import React, { useState } from "react";

const Objects = () => {
  const [text, setText] = useState("");
  const [add, setAdd] = useState("");

  const onClickHandle = () => {
    setAdd(text);
    setText("");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input onChange={handleOnChange} value={text} />
      <button onClick={onClickHandle}>add </button>
      <div>{add}</div>
      <a href="/">back to homePage</a>
    </div>
  );
};

export default Objects;

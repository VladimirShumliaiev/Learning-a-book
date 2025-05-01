import React, { useState } from "react";
import Button from "./Button";

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
      <Button onClick={onClickHandle}>add</Button>
      <div>{add}</div>
      <a href="/">back to homePage</a>
    </div>
  );
};

export default Objects;

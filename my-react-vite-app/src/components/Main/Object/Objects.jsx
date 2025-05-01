import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Objects = () => {
  const [text, setText] = useState("");
  const [add, setAdd] = useState("");

  return (
    <div>
      <Input text={text} setText={setText} />
      <Button setAdd={setAdd} setText={setText} text={text}>
        add
      </Button>
      <div>{add}</div>
      <a href="/">back to homePage</a>
    </div>
  );
};

export default Objects;

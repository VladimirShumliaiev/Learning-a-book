import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Objects = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [nameText, setNameText] = useState("");
  const [add, setAdd] = useState("");

  return (
    <div>
      <Input text={text} setText={setText} placeholder="...one" />
      <Input text={nameText} setText={setNameText} placeholder="...two" />
      <Button setAdd={setAdd} setText={setText} text={text}>
        add
      </Button>
      <Button setAdd={setName} setText={setNameText} text={nameText}>
        name
      </Button>

      <div>{add}</div>
      <div>{name}</div>
      <a href="/">back to homePage</a>
    </div>
  );
};

export default Objects;

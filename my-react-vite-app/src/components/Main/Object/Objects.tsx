import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Objects = () => {
  const [title, setTitle] = useState("");
  const [display, setDisplay] = useState("");

  return (
    <div>
      <Input title={title} setTitle={setTitle} />
      <Button title={title} setTitle={setTitle} setDisplay={setDisplay}>
        add
      </Button>
      <div>{display}</div>
    </div>
  );
};

export default Objects;

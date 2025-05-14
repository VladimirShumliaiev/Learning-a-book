import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Objects = () => {
  const [title, setTitle] = useState("");
  const [display, setDisplay] = useState("");
  return (
    <div>
      <Input title={title} setTitle={setTitle} />
      <Button title={title} setDisplay={setDisplay} setTitle={setTitle}>
        add
      </Button>
      <div>{display}</div>
    </div>
  );
};

export default Objects;

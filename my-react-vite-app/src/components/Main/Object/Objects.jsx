import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Objects = () => {
  const [title, setTitle] = useState("");
  const [display, setDisplay] = useState("");
  return (
    <div>
      <Input text={title} setText={setTitle} />
      <Button title={title} setDisplay={setDisplay} setText={setTitle}>
        add Title
      </Button>
      <div>{display}</div>
    </div>
  );
};

export default Objects;

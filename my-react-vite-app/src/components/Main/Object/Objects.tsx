import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Objects = () => {
  const [title, setTitle] = useState("");
  const [display, setDisplay] = useState("");

  return (
    <div>
      <Input title={title} setTitle={setTitle} />
      <Button title={title}>add</Button>
    </div>
  );
};

export default Objects;

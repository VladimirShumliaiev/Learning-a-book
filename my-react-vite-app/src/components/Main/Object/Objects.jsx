import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Objects = () => {
  const [title, setTitle] = useState("");
  const [addTitle, setAddTitle] = useState("");
  return (
    <div>
      <Input title={title} setTitle={setTitle} />
      <Button setAddTitle={setAddTitle} title={title} setTitle={setTitle}>
        add Title
      </Button>
      <div>{addTitle}</div>
    </div>
  );
};

export default Objects;

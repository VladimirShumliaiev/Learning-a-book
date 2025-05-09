import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Objects = () => {
  const [title, setTitle] = useState("");
  const [display, setDisplay] = useState("");
  return (
    <div>
      <div>
      <Input title={title} setTitle={setTitle}/>
      <Button title={title} setDisplay={setDisplay} setText={setTitle}>
        add Title
      </Button>
      </div>
      <div>{display}</div>
    </div>
  );
};

export default Objects;

import React from "react";
import Button from "./Button";



const Input = ({ title, setTitle,display, setDisplay}) => {
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.prevent.Default
    setDisplay(title)
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={title} onChange={handleOnChange} />
       <Button title={title} setDisplay={setDisplay} setText={setTitle}>
        add Title
      </Button>
    </form>
  );
};

export default Input;

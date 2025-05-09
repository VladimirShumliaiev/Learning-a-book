import React from "react";

const Input = ({ text, setText }) => {
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input type="text" value={text} onChange={handleOnChange} />
    </>
  );
};

export default Input;

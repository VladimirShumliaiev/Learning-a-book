import React from "react";

const Button = ({ setText, setDisplay, text, children }) => {
  const handleOnClick = () => {
    setDisplay(text);
    setText("");
  };
  return (
    <>
      <button onClick={handleOnClick}>{children}</button>
    </>
  );
};

export default Button;

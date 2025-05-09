import React from "react";

const Button = ({ setText, setDisplay, children, title }) => {
  const handleOnClick = () => {
    setDisplay(title);
    setText("");
  };
  return (
    <div>
      <button onClick={handleOnClick}>{children}</button>
    </div>
  );
};

export default Button;

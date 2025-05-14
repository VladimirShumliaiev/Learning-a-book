import React from "react";

const Button = ({ title, setTitle, setDisplay, children }) => {
  const handleOnClick = () => {
    if (title.trim().length) {
      setDisplay(title);
      setTitle("");
    }
  };
  return (
    <div>
      <button onClick={handleOnClick}>{children}</button>
    </div>
  );
};

export default Button;

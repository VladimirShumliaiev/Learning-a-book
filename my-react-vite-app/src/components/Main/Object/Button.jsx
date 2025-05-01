import React from "react";

const Button = ({ title, setTitle, setAddTitle, children }) => {
  const handleOnClick = (e) => {
    // e.preventDefault();
    setAddTitle(title);
    setTitle("");
  };
  return (
    <div>
      <button onClick={handleOnClick}>{children}</button>
    </div>
  );
};

export default Button;

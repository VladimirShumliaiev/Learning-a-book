import React from "react";

const Button = ({ text, setText, setAdd, children }) => {
  const onClickHandle = () => {
    setAdd(text);
    setText("");
  };

  return (
    <div>
      <button onClick={onClickHandle}>{children}</button>
    </div>
  );
};

export default Button;

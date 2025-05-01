import React from "react";

const Input = ({ text, setText, placeholder }) => {
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleOnChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

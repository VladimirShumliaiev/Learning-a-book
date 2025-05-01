import React from "react";

const Input = ({ title, setTitle }) => {
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <input type="text" value={title} onChange={handleOnChange} />
    </div>
  );
};

export default Input;

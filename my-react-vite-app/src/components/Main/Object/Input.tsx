import React from "react";



const Input = ({ title, setTitle }) => {
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <input type="text" value={title} onChange={handleOnChange} />
    </>
  );
};

export default Input;

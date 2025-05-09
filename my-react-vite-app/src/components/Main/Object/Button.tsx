import React, { FC } from "react";

type Props = {
  title: string,
  setText: (e: string) => void
  setDisplay: (e: string) => void
  children: string
}

const Button: FC<Props> = ({ setText, setDisplay, children, title }) => {
  const handleOnClick = () => {
    setDisplay(title);
    setText("");
  };
  return (
    <>
      <button onClick={handleOnClick}>{children}</button>
    </>
  );
};

export default Button;

import React, { FC } from "react";

type InputProps = {
  title: string;
  setTitle: (text: string) => void;
  addTodo: () => void;
  children: string;
  placeHolder: string;
};

const Input: FC<InputProps> = (props) => {
  const { title, setTitle, addTodo, children, placeHolder } = props;

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const handlerOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (title.trim().length) {
      addTodo();
      setTitle("");
    }
  };
  return (
    <>
      <form onSubmit={handlerOnSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleOnChange}
          placeholder={placeHolder}
        />
        <button>{children}</button>
      </form>
    </>
  );
};

export default Input;

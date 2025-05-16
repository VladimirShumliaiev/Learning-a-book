import React, { FC } from "react";

type InputProps = {
  title: string;
  setTitle: (text: string) => void;
  addTodo: () => void;
  children: string;
};

const Input: FC<InputProps> = (props) => {
  const { title, setTitle, addTodo, children } = props;

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTitle(event.target.value);
  };

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title.trim().length) {
      addTodo();
      setTitle("");
    }
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleOnChange}
          placeholder="add Task..."
        />
        <button>{children}</button>
      </form>
    </div>
  );
};

export default Input;

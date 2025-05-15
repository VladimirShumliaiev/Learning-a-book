import React, { FC } from "react";
import { deleteTodo, toggleTodo } from "../../../redux/Slices/TodoSlice";
import { useAppDispatch } from "../../hooks/hooks";

type ItemProps = {
  id: string;
  title: string;
  completed: boolean;
};

const Item: FC<ItemProps> = (props) => {
  const { id, title, completed } = props;
  const dispatch = useAppDispatch();

  const inputHandle = () => {
    dispatch(toggleTodo(id));
  };

  const buttonHandle = () => {
    if (window.confirm("delete todo?")) dispatch(deleteTodo(id));
  };
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={inputHandle} />{" "}
      {title} <button onClick={buttonHandle}> X </button>
    </div>
  );
};

export default Item;

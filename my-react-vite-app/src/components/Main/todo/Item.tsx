import React, { FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteTodo, toggleTodo } from "../../../redux/Slices/TodoSlice";

type ItemProps = {
  id: string;
  title: string;
  completed: boolean;
};

const Item: FC<ItemProps> = (props) => {
  const { id, title, completed } = props;
  const dispatch = useAppDispatch();

  const handlerOnChange = () => {
    dispatch(toggleTodo(id));
  };

  const handlerOnClick = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <input type={"checkbox"} checked={completed} onChange={} />
      {title}
      <button onClick={}>X</button>
    </div>
  );
};

export default Item;

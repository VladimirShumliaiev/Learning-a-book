import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addTodo, fetchTodo } from "../../../redux/Slices/TodoSlice";
import List from "./List";
import Input from "./Input";

const Todo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const addTask = () => {
    dispatch(addTodo(title));
  };

  return (
    <div>
      <Input
        children={"add"}
        placeHolder={"...todo"}
        title={title}
        setTitle={setTitle}
        addTodo={addTask}
      />
      <List />
    </div>
  );
};

export default Todo;

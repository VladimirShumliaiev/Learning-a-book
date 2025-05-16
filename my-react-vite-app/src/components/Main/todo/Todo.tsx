import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchTodo } from "../../../redux/Slices/TodoSlice";
import List from "./List";
import Input from "./Input";

const Todo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div>
      <Input />
      <List />
    </div>
  );
};

export default Todo;

import React, { useEffect, useState } from "react";
import {  addTodo, fetchTodo } from "../../redux/Slices/TodoSlice";
import { useAppDispatch } from "../hooks/hooks";
import Input from "./Input";
import List from "./List";

const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  const addTask = () => {
    dispatch(addTodo(text))
  }

  return <div>
    <Input title={text} setTitle={setText} addTodo={addTask}/>
    <List/>
  </div>;
};

export default Todo;

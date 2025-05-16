import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";

const Todo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);
  return <div></div>;
};

export default Todo;

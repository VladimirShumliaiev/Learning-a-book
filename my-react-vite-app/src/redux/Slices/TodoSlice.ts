import { createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoState = {
  listTodo: Todo[];
  pending: boolean;
  error: string | null;
};

const initialState: TodoState = {
  listTodo: [],
  pending: false,
  error: null,
};

const todoSlice = createSlice({
  name: "Todo",
  initialState: initialState,
  reducers: {},
});

export default todoSlice.reducer;

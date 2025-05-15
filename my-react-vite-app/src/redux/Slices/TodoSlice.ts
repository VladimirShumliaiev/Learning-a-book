import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const fetchTodo = createAsyncThunk<
  Todo[],
  undefined,
  { rejectValue: string }
>("Todo/fetchTodo", async (_, { rejectWithValue }) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/?_limit=15"
  );

  if (!response) {
    return rejectWithValue("error fetch todo");
  }

  return await response.data;
});

export const addTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
  "Todo/addTodo",
  async (title, { rejectWithValue }) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        id: Date.now(),
        title: title,
        completed: false,
      }
    );

    if (!response) {
      return rejectWithValue("error add todo");
    }

    return await response.data;
  }
);

export const toggleTodo = createAsyncThunk<
  Todo,
  string,
  { rejectValue: string; state: { todo: TodoState } }
>("Todo/toggleTodo", async (id, { rejectWithValue, getState }) => {
  const toggle = getState().todo.listTodo.find((e) => e.id === id);

  if (toggle) {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!response) {
      return rejectWithValue("Error response toggle todo");
    }
    return await response.data;
  }
  return rejectWithValue("Error");
});

export const deleteTodo = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("Todo/deleteTodo", async (id, { rejectWithValue }) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  if (!response) {
    return rejectWithValue("error delete todo");
  }
  return id;
});

const todoSlice = createSlice({
  name: "Todo",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.pending = true;
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.listTodo = action.payload;
        state.pending = false;
      })
      .addCase(addTodo.pending, (state) => {
        (state.pending = true), (state.error = null);
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.listTodo.push(action.payload);
        state.pending = false;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const toggle = state.listTodo.find((e) => e.id === action.payload.id);
        if (toggle) {
          toggle.completed = !toggle.completed;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.listTodo = state.listTodo.filter((e) => e.id !== action.payload);
      }),
});

export default todoSlice.reducer;

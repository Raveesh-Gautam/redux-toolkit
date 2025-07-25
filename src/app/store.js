// 1st step

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import countReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: { todos: todoReducer, counter: countReducer },
});

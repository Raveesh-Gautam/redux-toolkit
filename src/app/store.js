// 1st step

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import countReducer from "../features/counterSlice";
import  inputReducer from "../features/inputSlice";

export const store = configureStore({
  reducer: { todos: todoReducer, counter: countReducer,
    inputData:inputReducer
   }
});

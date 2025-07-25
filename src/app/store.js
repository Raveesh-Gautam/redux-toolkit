// 1st step

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import countReducer from "../features/counterSlice";
import  inputReducer from "../features/inputSlice";
import counter5Reducer from "../features/counter5Slice";

export const store = configureStore({
  reducer: { todos: todoReducer, counter: countReducer,
    inputData:inputReducer,
    count5:counter5Reducer
   }
});

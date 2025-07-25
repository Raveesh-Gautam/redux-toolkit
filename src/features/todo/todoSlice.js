// 2nd step
// nanoid generate uniqueId

import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};
// kucch hame remove karna h ya kuchh to id lagegi vo id hame action se milegi
// state current state ko batata h

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

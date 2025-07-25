import { createSlice, ReducerType } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
export const counter5Slice = createSlice({
  name: "count5",
  initialState,
  reducers: {
    incrementBy5: (state, action) => {
      state.count += 5;
    },
    decrementBy5: (state, action) => {
      if (state.count < 5) {
        return;
      } else {
        state.count -= 5;
      }
    },
  },
});
export  const {incrementBy5,decrementBy5}=counter5Slice.actions;
export default counter5Slice.reducer;

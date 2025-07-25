import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0
}
export const countSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        incrementCounter:(state,action)=>{
          
           state.count+=2;
        },
        decrementCounter:(state,action)=>{
              if(state.count<2) return;
            state.count-=2;
        }
    }
})
export const {incrementCounter,decrementCounter}=countSlice.actions;
export default countSlice.reducer;
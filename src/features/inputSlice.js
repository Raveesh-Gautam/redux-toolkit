import { createSlice } from "@reduxjs/toolkit";
const initialState={
    name:'Raveesh'
}
 export const  inputSlice=createSlice(
    {
       name:'inputData' ,
       initialState,
       reducers:{
        changeName:(state,action)=>{
     
          state.name=action.payload;
        
        }
       }
    }
 )
 export  const {changeName}=inputSlice.actions;
 export default inputSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userData:null
}
export const LogSlice = createSlice({
    name:'log',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload;
        },
        logout:(state)=>{
            state.status=false;
        },
    }
})

export const {login,logout}=LogSlice.actions;
export default LogSlice.reducer;
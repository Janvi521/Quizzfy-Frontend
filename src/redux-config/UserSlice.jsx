import { createSlice } from "@reduxjs/toolkit";

const slice =createSlice({
    name:"User-Slice",
    initialState:{
        user:{}
    },
    reducers:{
        setUser:(state,action)=>{
            let {_id,name,email,password,role,quizAll}=action.payload;
            state.user={_id,name,email,password,role,quizAll};

        }
    }
})
export const {setUser} = slice.actions;
export default slice.reducer;
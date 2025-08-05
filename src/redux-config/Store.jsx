import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice"
const store = configureStore({
   reducer:{
     User:UserSlice
   }
})
//user:user,isLOGGEDIN
export default store;
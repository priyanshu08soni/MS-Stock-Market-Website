import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import authService from "./userService"
export const registerUser=createAsyncThunk("auth/register",async(userData,thunkAPI)=>{
    try {
        return await authService.register(userData);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const loginUser=createAsyncThunk("auth/login",async(userData,thunkAPI)=>{
    try {
        return await authService.login(userData);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const resetState=createAction("Reset_all");
const getCustomerFromLocalStorage =localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null;
const initialState={
    user:getCustomerFromLocalStorage,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}
export const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.createdUser=action.payload;
            if(state.isSuccess===true){
                toast.info("User Created Successfully")
            }
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.payload);
            }
        })
        .addCase(loginUser.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.user=action.payload;
            console.log(action.payload);
            if(state.isSuccess===true){
                toast.info("Loggedin Successfully")
            }
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.payload);
            }
        })
       
    }
})

export default authSlice.reducer;
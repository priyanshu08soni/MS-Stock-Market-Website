import { configureStore } from '@reduxjs/toolkit';
import  authReducer  from "../features/user/userSlice.js";
export const store = configureStore({
  reducer: {
    auth:authReducer,
  },
});

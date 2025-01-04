import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../redux/todoReducer.js";

export const store = configureStore({
  reducer: todoReducer,
});

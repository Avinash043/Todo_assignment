import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoReducer.js";
import authReducer from "../redux/authReducer.js";
import weatherReducer from "../redux/weatherReducer.js";

export const store = configureStore({
  reducer: { todo : todoReducer, auth : authReducer , weather: weatherReducer, },
});

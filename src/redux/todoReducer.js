import { createSlice } from "@reduxjs/toolkit";

//set initial data 
const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //reducers function
    addTodo: (state, action) => {
      const todo = action.payload
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    deleteTodo: (state, action) => {
      const todoId = action.payload;
      const index = state.todos.findIndex((item) => item.id === todoId);
      if (index >= 0) {
        state.todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;

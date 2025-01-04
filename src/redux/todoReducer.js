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

    editTodo: (state, action) => {
      const todo = action.payload
      const index = state.todos.findIndex((item) => item.id === todo.id);

      if (index >= 0) {
        state.todos[index] = todo;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;

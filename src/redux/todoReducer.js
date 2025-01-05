import { createSlice } from "@reduxjs/toolkit";


//set initial data 
const initialState = {
  tasks : localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [],
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
    editTask: (state, action) => {
      const task = action.payload

      const index = state.tasks.findIndex((item) => item.id == task.id);
      console.log("index",index);
      if (index >= 0) {
        state.tasks[index] = task;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTodo, editTodo ,editTask } = todoSlice.actions;

export default todoSlice.reducer;


import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoReducer";
import { useState } from "react";
import { useNavigate } from "react-router";
import { nanoid } from "@reduxjs/toolkit";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //sending new data to LocalStorage
    const todo = {
      id: nanoid(),
      title: title,
      description: description,
    };
    e.preventDefault();
    dispatch(addTodo(todo));
    setTitle("");
    setDescription("");
    navigate("/");  //navigate to homepage after adding task
  };

  return (
    <>
      <div className="bg-slate-300 min-h-screen w-full flex justify-center items-center p-4">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="Enter title..."
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="desc" className="text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="desc"
              value={description}
              placeholder="Enter description..."
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTask;

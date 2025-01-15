import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoReducer";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function AddTask() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState();

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.user.userName); //get username from auth localStorage

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation
    if (!task || !priority) {
      return toast.error("Task or priority cannot be empty");
    }
    const todo = {
      id: nanoid(),
      task: task,
      priority: priority,
      owner: userName
    }; //create todo object

    dispatch(addTodo(todo));
    setTask("");
  };

  return (
    <>
      <Toaster />
       {/* Add task form */}
      <div className="flex justify-center pb-4 items-center">
        <form
          action=""
          onSubmit={handleSubmit}
          className="bg-[#141416] p-6 rounded-lg shadow-md flex flex-col lg:flex-row gap-4 lg:gap-10 w-full max-w-4xl justify-center items-center"
        >
          <div className="flex flex-col gap-2 w-full lg:w-1/2">
            <input
              type="text"
              id="task"
              value={task}
              placeholder="Enter task..."
              onChange={(e) => setTask(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F39F5A] w-full"
            />
          </div>
          {/* dropDown */}
          <div className="dropdown w-full lg:w-auto">
            <button
              className="btn dropdown-toggle bg-white w-full lg:w-auto"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {priority || "Priority"}
            </button>
            <ul className="dropdown-menu w-full lg:w-auto" aria-labelledby="dropdownMenu2">
              <li>
                <button className="dropdown-item" type="button" disabled>
                  Higher number is higher priority
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setPriority(1)}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setPriority(2)}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setPriority(3)}
                >
                  3
                </button>
              </li>
            </ul>
          </div>

          <button
            type="submit"
            className="font-bold py-2 px-4 bg-[#F39F5A] text-black rounded hover:bg-[#ad6224] transition duration-200 w-full lg:w-auto"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTask;

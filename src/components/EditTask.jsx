import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { editTask } from "../redux/todoReducer";

function EditTask() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskId = useParams().id;
  console.log("taskid",taskId);
  const tasks = useSelector((state) => state.tasks);
  console.log("tasks",tasks);



  //Displaying exist data in input field
  useEffect(() => {
    if (taskId) {
      const task = tasks.find((t) => t.id == taskId);
      console.log("tas",task);
      if (task) {
        setTitle(task.title);
      }
    }
  }, [taskId, tasks]);

  //handling Update Button
  const handleUpdate = (e) => {
    e.preventDefault();
    // sending updated data to localStorage
    const task = tasks.find((t) => t.id == taskId);
    console.log("task123",task);
    const updatedTask = {
      completed: task.completed,
      userid: task.userid,
      id: taskId,
      title: title,
    };
    dispatch(editTask(updatedTask));
    setTitle("");

    navigate("/"); // navigate to homepage after update
  };

  return (
    <>
      <div className="bg-slate-300 min-h-screen w-full flex justify-center items-center p-4">
        <form
          action=""
          onSubmit={handleUpdate}
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
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Update Task
          </button>
        </form>
      </div>
    </>
  );
}

export default EditTask;

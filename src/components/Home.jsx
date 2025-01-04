import { useEffect, useState } from "react";
import { Link } from "react-router";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";

function Home() {
  const todos = useSelector((state) => state.todos);
  const [tasks, setTasks] = useState([]);
  
  //fetching data from existing API
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTasks(data); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchTask();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl md:text-6xl text-center text-rose-500 font-bold mt-6">
        TO-DO List
      </h1>
      {/* button for add new task */}
      <div className="flex justify-center mt-4">
        <Link to="/addtask">
          <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
            + Add Task
          </button>
        </Link>
      </div>
      <div className="mt-6 space-y-4">
        {/* Display all task */}
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-slate-300 p-4 rounded-md flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex gap-4 items-center ">
              <Checkbox />
              <div>
                <h1 className="font-bold text-lg">{todo.title}</h1>
                <p className="text-sm text-gray-700">{todo.description}</p>
              </div>
            </div>
            <div className="text-right md:pr-6">
              <Link to={`/edittask/${todo.id}`}>
                <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                  Update Task
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="space-y-4">
        {/* Display all fetched task from API */}
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-slate-300 p-4 rounded-md flex items-center gap-4"
          >
            {task.completed ? <Checkbox checked /> : <Checkbox />}
            <h1 className="font-medium text-lg">{task.title}</h1>
            <Link to={`/edittask/${task.id}`}></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

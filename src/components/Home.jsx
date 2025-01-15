import { useSelector, useDispatch } from "react-redux";
import TaskInput from "./TaskInput";
import { deleteTodo } from "../redux/todoReducer";
import { Star, Trash2 } from "lucide-react";
import { logout } from "../redux/authReducer";
import { useNavigate } from "react-router";
import Weather from "./Weather";

function Home() {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo.todos); //get todos from todoReducer
  const priortisedTodos = [...todos].sort((a, b) => b.priority - a.priority); //sort todos based on priority
  const userName = useSelector((state) => state.auth.user.userName); //get username from auth localStorage
  const userTodo = priortisedTodos.filter((todo) => todo.owner === userName); //filter todos based on username
  const dispatch = useDispatch();

  //logout
  const handleLogout = () => {
    const user = { isLogin: false, userName: null };
    dispatch(logout(user));
    navigate("/");
  };

  //delete todo
  function handleDelete(todoId) {
    dispatch(deleteTodo(todoId));
  }

  return (
    <div className="min-h-screen p-6 bg-[#323232]">
      {/* Header */}
      <header className="bg-[#141416] p-3 rounded-md flex flex-row items-center gap-4 justify-between px-4 overflow-x-auto">
        <div className="text-[#C4D9FF] font-bold pl-6">TODO-APP</div>
        <div className="flex gap-5 items-center">
          <div className="text-white font-semibold">
            Welcome, <strong>{userName}</strong>
          </div>
          <div>
            <button
              className="mr-2 py-1 px-3 bg-[#F39F5A] text-black font-semibold rounded hover:bg-[#ad6224] transition duration-200"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      {/* Weather Component */}
      <Weather />
      {/* TaskInput Component */}
      <TaskInput />
      <div className="space-y-4 ">
         {/* Task list */}
        {userTodo && Array.isArray(userTodo) ? 
        //if tasks available
        ( userTodo.map((todo) => (
            <div
              key={todo.id}
              className="bg-[#141416] p-2 rounded-md flex flex-col md:flex-row md:items-center md:justify-between gap-4 overflow-x-auto"
            >
              <div className="flex gap-4 items-center justify-between w-full">
                <div className="flex gap-4 items-center ml-6">
                  <input
                    type="checkbox"
                    className=" w-5 h-5 border-2 border-[#F39F5A] rounded-2xl bg-transparent focus:ring-2 focus:ring-[#F39F5A] checked:bg-[#F39F5A] checked:border-[#F39F5A]"
                  />
                  <div>
                    <h1 className="font-bold text-lg text-white">
                      {todo.task}
                    </h1>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1 items-center">
                    {[...Array(todo.priority)].map((index) => (
                      <Star key={index} color="#EEDF7A" fill="#EEDF7A" />
                    ))}
                  </div>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="pr-10"
                  >
                    <Trash2 color="red" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          //if no tasks available
          <h1 className="text-white">No tasks available</h1>
        )}
      </div>
    </div>
  );
}

export default Home;

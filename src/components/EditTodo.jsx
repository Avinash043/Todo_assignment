import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { editTodo } from "../redux/todoReducer";

function EditTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const todoId = useParams().id;
  const todos = useSelector((state) => state.todos);

  //Displaying exist data in input field 
  useEffect(() => {
    if (todoId) {
      const todo = todos.find((t) => t.id === todoId);
      if (todo) {
        setTitle(todo.title);
        setDescription(todo.description);
      }
    }
  }, [todoId,todos]);

  //handling Update Button
  const handleUpdate = (e) => {
    e.preventDefault();
    // sending updated data to localStorage
    const updatedTodo = {
      id: todoId,
      title: title,
      description: description,
    };
    dispatch(editTodo(updatedTodo));
    setTitle("");
    setDescription("");
    navigate("/");  // navigate to homepage after update
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
      <label htmlFor="title" className="text-sm font-medium text-gray-700">
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
      Update Task
    </button>
  </form>
</div>

    </>
  );
}

export default EditTask;

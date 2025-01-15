import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authReducer";
import { useNavigate } from "react-router";

const Login = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handling login
  const handleLogin = (e) => {
    e.preventDefault(); //prevent default form submission
    const user = {
      isLogin: true,
      userName: userName,
    }; 
    dispatch(login(user));
    setUserName(""); 
    navigate("/todo"); 
  };

  return (
    // Login form
    <div className="h-screen bg-[#323232] flex justify-center items-center p-4">
      <form
        onSubmit={handleLogin}
        className="bg-black p-6 rounded-lg shadow-md flex gap-6 flex-col w-full max-w-md"
      >
        <div className="flex gap-3 flex-col">
          <label
            htmlFor="task"
            className="text-xl text-[#C4D9FF] mb-2 font-bold text-center"
          >
            Username
          </label>
          <input
            type="text"
            id="task"
            value={userName}
            placeholder="Enter username..."
            onChange={(e) => setUserName(e.target.value)}
            className="p-2 border w-full border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F39F5A] "
          />
        </div>

        <button
          type="submit"
          className=" hover:bg-[#ad6224] py-2 px-4 bg-[#F39F5A] text-white rounded transition duration-200"
        >
          LogIn
        </button>
      </form>
    </div>
  );
};

export default Login;

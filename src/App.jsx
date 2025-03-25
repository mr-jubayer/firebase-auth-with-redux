import { useEffect, useState } from "react";
import { Login } from "./components/login";
import Register from "./components/Register";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./features/auth/authSlice";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(user);
  }, [user]);

  let content;

  if (currentPage === "home") {
    content = <h2> Welcome to Home page.</h2>;
  } else if (currentPage === "login") {
    content = <Login />;
  } else if (currentPage === "register") {
    content = <Register />;
  }
  return (
    <div className="p-5">
      <div>
        <div className="flex gap-3 ">
          <button
            onClick={() => setCurrentPage("home")}
            className="px-4 py-2 rounded bg-gray-200  cursor-pointer hover:bg-gray-300 transition-all duration-200"
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage("login")}
            className="px-4 py-2 rounded bg-gray-200  cursor-pointer hover:bg-gray-300 transition-all duration-200"
          >
            Login
          </button>
          <button
            onClick={() => setCurrentPage("register")}
            className="px-4 py-2 rounded bg-gray-200  cursor-pointer hover:bg-gray-300 transition-all duration-200"
          >
            Register
          </button>
          <button
            onClick={() => dispatch(logout())}
            className="px-4 py-2 rounded bg-gray-200  cursor-pointer hover:bg-gray-300 transition-all duration-200"
          >
            Logout
          </button>
        </div>

        <div className="bg-gray-100 mt-5 p-5 rounded">{content}</div>
      </div>
    </div>
  );
}

export default App;

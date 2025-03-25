import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          className="px-3 py-1.5 border-none outline border block my-2"
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="px-3 py-1.5 border-none outline border block my-2"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="py-2 rounded bg-gray-300 px-3 cursor-pointer"
          type="submit"
        >
          Login
        </button>
        {/* {error && <p>{error}</p>} */}
      </form>
    </div>
  );
};

export { Login };

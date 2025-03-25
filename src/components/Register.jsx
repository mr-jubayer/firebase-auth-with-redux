import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ email, password }));
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
          Register
        </button>
        {/* {error && <p>{error}</p>} */}
      </form>
    </div>
  );
};

export default Register;

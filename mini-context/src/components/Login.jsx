import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="border-2 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          {/* Password */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-amber-800 text-black rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both email and password are required!");
      return;
    }

    if (email === "user@example.com" && password === "password123") {
      alert("Login successful!");
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <h2 className="flex flex-col items-center justify-center w-full text-4xl font-extrabold pt-12">
        Register
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full gap-2 py-4"
      >
        <input
          type="text"
          id="name"
          className="border-[1px] rounded-md px-4 py-2 w-3/4 border-gray-500 my-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <input
          type="text"
          id="username"
          className="border-[1px] rounded-md px-4 py-2 w-3/4 border-gray-500 my-2"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          placeholder="Enter your username"
        />
        <input
          type="email"
          id="email"
          className="border-[1px] rounded-md px-4 py-2 w-3/4 border-gray-500 my-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />

        <input
          type="password"
          id="password"
          className="border-[1px] rounded-md px-4 py-2 w-3/4 border-gray-500 my-2 mb-8"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
        />

        {error && <p className="error">{error}</p>}

        <button
          className="border-[1px] rounded-md px-4 py-2 w-3/4 text-white bg-black font-semibold"
          type="submit"
        >
          Register
        </button>

        <nav className="flex flex-row gap-1">
          <p className="">Do you have an account?</p>
          <a
            className="font-semibold text-gray-500 p-0"
            onClick={() => navigate("/login")}
          >
            Log in here
          </a>
        </nav>
      </form>
    </section>
  );
};

export default Register;

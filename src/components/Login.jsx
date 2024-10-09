import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
        Log In
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full gap-2 py-4"
      >
        <input
          type="email"
          id="email"
          className="border-[1px] rounded-md px-4 py-2 w-3/4 border-gray-500 my-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />

        <input
          type="password"
          id="password"
          className="border-[1px] rounded-md px-4 py-2 w-3/4 border-gray-500 my-4 mb-8"
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
          Log in
        </button>

        <p className="font-semibold text-gray-500">or</p>

        <button className="flex flex-row gap-4 items-center justify-center border-[1px] rounded-md px-4 py-2 w-3/4 bg-white mb-2 font-semibold text-gray-600">
          <img src="/google.webp" alt="google" className="w-6" />
          Sing in with Google
        </button>
        <a href="#" className="font-semibold text-gray-500">
          Did you forget your password?
        </a>
        <nav className="flex flex-row gap-1">
          <p className="">Don't have an account yet?</p>
          <a href="/register" className="font-semibold text-gray-500 p-0">
            Sign up here
          </a>
        </nav>
      </form>
    </section>
  );
};

export default Login;

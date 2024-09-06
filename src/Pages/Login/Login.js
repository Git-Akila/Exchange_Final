//npm i react-toastify react-pattern-lock


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PatternLock from "react-pattern-lock";

import { loginUser } from "../../Data/fetchUserData";

// import { loginUser } from "../../Slicers/loginSlice";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pattern, setPattern] = useState([]);
  const [isPatternLocked, setIsPatternLocked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useSelector((state) => state.login);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isPatternLocked) {
      toast.error("Please set a pattern first!");
      return;
    }

    try {
      await dispatch(
        loginUser({ email, password, pattern: pattern.join("") })

      ).unwrap(); 



      toast.success("Login successful!");
      setEmail("");
      setPassword("");
      setPattern([]);
      setIsPatternLocked(false);
      navigate("/"); 
    } catch (error) {
      toast.error(error.message || "An error occurred during login.");
      setIsPatternLocked(false);
    }
  };

  const handlePatternChange = (newPattern) => {
    setPattern(newPattern);
  };

  const handlePatternFinish = () => {
    setIsPatternLocked(true);
  };
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Pattern:", pattern.join(""));
  
  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleRegister}
        className="bg-blue-900 justify-center items-center flex-col p-3"
      >
        <div className="justify-center items-center">
          <h2 className="text-white text-2xl font-bold p-3">Login</h2>
          <input
            placeholder="Enter email"
            className="py-3 mb-2 px-4 rounded-lg border w-full border-gray-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Enter password"
            className="py-3 mb-2 px-4 rounded-lg border w-full border-gray-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="justify-center items-center flex bg-blue-100 mb-4">
          <PatternLock
            width={300}
            pointSize={15}
            size={3}
            path={pattern}
            onChange={handlePatternChange}
            onFinish={handlePatternFinish}
            disabled={isPatternLocked}
          />
        </div>

        <div className="items-center justify-center flex">
          <button
            type="submit"
            className="p-3 m-2 bg-white rounded-2xl text-center"
            disabled={isLoading || !isPatternLocked}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
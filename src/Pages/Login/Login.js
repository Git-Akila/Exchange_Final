//npm i react-toastify react-pattern-lock
//npm install styled-components

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PatternLock from "react-pattern-lock";
import styled from "styled-components";
import { loginUser } from "../../Data/fetchUserData";

const PatternLockContainer = styled.div`
  .custom-pattern-lock {
    filter: drop-shadow(
      0 0 8px rgba(255, 255, 255, 0.8)
    ); /* Add shadow to the entire lock */
  }

  .custom-pattern-lock circle {
    transition: all 0.3s ease;
    fill: rgba(0, 123, 255, 0.5); /* Optional: Semi-transparent fill */
    stroke: #007bff;
    stroke-width: 1;
  }

  .custom-pattern-lock circle:hover {
    stroke: #ffffff;
    stroke-width: 2;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)); /* Add shadow */
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pattern, setPattern] = useState([]);
  const [isPatternLocked, setIsPatternLocked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useSelector((state) => state.login);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const expirationTime = localStorage.getItem("expirationTime");
    

    if (token && expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime >= expirationTime) {
        // Token has expired
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");
        toast.error("Session expired. Please log in again.");
        navigate("/login");
      } else {
        // Token is still valid
        const timeLeft = expirationTime - currentTime;

        // Set a timeout to automatically log out when time runs out
        const timeout = setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("expirationTime");
          toast.error("Session expired. Please log in again.");
          navigate("/login");
        }, timeLeft);

        // Clear the timeout when the component unmounts or dependencies change
        return () => clearTimeout(timeout);
      }
    } else {
      // No token or expiration time in localStorage
      navigate("/login");
    }
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isPatternLocked) {
      toast.error("Please set a pattern first!");
      return;
    }

    try {
      const result = await dispatch(
        loginUser({ email, password, pattern: pattern.join("") })
      ).unwrap();

      if (result?.token) {
        localStorage.setItem("token", result.token);

        const expirationTime = new Date().getTime() + 10 * 60 * 1000;
        localStorage.setItem("expirationTime", expirationTime);

        if (result?.token) {
          toast.success("Login successful!");
          navigate("/");
        } else {
          toast.error("Invalid token.");
        }

        setEmail("");
        setPassword("");
        setPattern([]);
        setIsPatternLocked(false);
      } else {
        toast.error("Invalid login credentials.");
      }
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

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleRegister}
        className="bg-blue-900 justify-center items-center flex-col p-3"
      >
        <div className="justify-center items-center">
          <div className="p-2 mb-2">
            <h2 className="text-white text-2xl font-bold">Sign-In</h2>
            <p className="text-[18px] font-medium text-white">
              Access the Koinnation panel using your email and password.
            </p>
          </div>
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

        <div className="flex justify-center items-center bg-blue-100 ">
          <div className="bg-gradient-to-b m-3 from-blue-700 to-blue-500 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-700 hover:scale-105">
            <PatternLockContainer>
              <PatternLock
                width={300}
                pointSize={15}
                size={3}
                path={pattern}
                onChange={handlePatternChange}
                onFinish={handlePatternFinish}
                disabled={isPatternLocked}
                className="custom-pattern-lock"
              />
            </PatternLockContainer>
          </div>
        </div>

        <div className="items-center justify-center flex">
          <button
            type="submit"
            className="p-3 m-2 bg-blue-800 text-white text-lg w-full rounded-lg text-center"
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

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
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// const PatternLockContainer = styled.div`
//   .custom-pattern-lock {
//     filter: drop-shadow(
//       0 0 8px rgba(255, 255, 255, 0.8)
//     ); /* Add shadow to the entire lock */
//   }

//   .custom-pattern-lock circle {
//     transition: all 0.3s ease;
//     fill: rgba(0, 123, 255, 0.5); /* Optional: Semi-transparent fill */
//     stroke: #007bff;
//     stroke-width: 1;
//   }

//   .custom-pattern-lock circle:hover {
//     stroke: #ffffff;
//     stroke-width: 2;
//     filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)); /* Add shadow */
//   }





//   .custom-pattern-lock .point {
//   background-color: #f0f0f0; /* Default point background */
//   border-radius: 50%;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Shadow on points */
//   transition: background-color 0.3s ease, box-shadow 0.3s ease;
// }

// .custom-pattern-lock .point:hover {
//   background-color: #4a90e2; /* Change background on hover */
//   box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2); /* Larger shadow on hover */
// }

// .custom-pattern-lock .path {
//   stroke: #4a90e2; /* Color of the path connecting points */
//   stroke-width: 4px; /* Thickness of the path */
// }
// `;

const PatternLockContainer = styled.div`
  /* Pattern Lock Container Styling */
  .custom-pattern-lock {
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)); /* Softer shadow for overall lock */
  }

  /* Styling for Points */
  .custom-pattern-lock .point {
    background-color: #f0f0f0; /* Default point background */
    border-radius: 50%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Shadow on points */
    position: relative;
    width: 40px;
    height: 40px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  /* Pseudo-element for expanding circle effect */
  .custom-pattern-lock .point::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0; /* Initially no circle */
    height: 0;
    border-radius: 50%;
    background-color: rgba(0, 123, 255, 0.3); /* Color of the expanding circle */
    transform: translate(-50%, -50%); /* Center the pseudo-element */
    transition: width 0.3s ease, height 0.3s ease;
    z-index: -1; /* Ensure the circle is behind the point */
  }

  /* Expand the circle on point click or selection */
  .custom-pattern-lock .point:active::before,
  .custom-pattern-lock .point.selected::before {
    width: 60px; /* Size of the expanding circle */
    height: 60px;
  }

  /* Active Point Styles */
  .custom-pattern-lock .point.selected {
    background-color: rgba(0, 123, 255, 0.5); /* Background for active points */
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2); /* Larger shadow when active */
  }

  /* Hover Effect for Points */
  .custom-pattern-lock .point:hover {
    background-color: rgba(0, 123, 255, 0.9); /* Darker blue on hover */
    box-shadow: 0px 8px 16px rgba(0, 123, 255, 0.3); /* Stronger hover shadow */
  }

  /* Styling for the Path Connecting Points */
  .custom-pattern-lock .path {
    stroke: linear-gradient(90deg, rgba(74, 144, 226, 1) 0%, rgba(255, 123, 255, 1) 100%); /* Gradient stroke */
    stroke-width: 5px; /* Slightly thicker path */
    stroke-linecap: round; /* Rounded edges for the path */
  }

  /* Active Path (The part of the path already connected) */
  .custom-pattern-lock .path-active {
    stroke: #4a90e2; /* Blue color for active path */
    stroke-width: 6px; /* Slightly thicker when active */
  }

  /* Shadow around the entire lock area */
  .custom-pattern-lock {
    filter: drop-shadow(0 4px 16px rgba(0, 123, 255, 0.2)); /* Light shadow around lock */
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pattern, setPattern] = useState([]);
  const [isPatternLocked, setIsPatternLocked] = useState(false);
  const [isPassword,setIsPassword]=useState("");
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
const handleTogglePassword=()=>{
  setIsPassword(!isPassword);
}
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
          <TextField
              placeholder="Enter Email"
              name="name"
              type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              fullWidth
              required
              sx={{ marginBottom: "7px", backgroundColor: "white",borderRadius:"5px" }}
            />
          {/* <input
            placeholder="Enter email"
            className="py-3 mb-2 px-4 rounded-lg border w-full border-gray-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /> */}
        </div>
        <div>
          {/* <input
            placeholder="Enter password"
            className="py-3 mb-2 px-4 rounded-lg border w-full border-gray-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /> */}
          <TextField
              placeholder="Enter password"
              name="name"
              type={isPassword?"text":"password"}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              fullWidth
              required
              sx={{ marginBottom: "7px", backgroundColor: "white" ,borderRadius:"5px"}}
            InputProps={{
              endAdornment:(
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                      {isPassword?<Visibility/>:<VisibilityOff/>}
                  </IconButton>
                </InputAdornment>
              )
            }}
            
            />
        </div>

        <div className="flex justify-center items-center bg-blue-100 ">
          <div className="bg-gradient-to-b m-3 from-blue-700 to-blue-500 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-700 hover:scale-105">
            <PatternLockContainer>
              <PatternLock
                width={300}
                pointSize={17}
                size={3}
                path={pattern}
                onChange={handlePatternChange}
                onFinish={handlePatternFinish}
                disabled={isPatternLocked}
                className="custom-pattern-lock custom-pattern-lock-circle custom-pattern-lock-point"/>
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

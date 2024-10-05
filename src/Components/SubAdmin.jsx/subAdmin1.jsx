import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Box,
  Grid,
} from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CheckBox, Visibility, VisibilityOff } from "@mui/icons-material";
import PatternLock from "react-pattern-lock";
import { useDispatch, useSelector } from "react-redux";
import { subAdmin } from "../../Data/fetchUserData";
import { toast, ToastContainer } from "react-toastify";

const SubLoginPage = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {isLoading,isError,data}=useSelector((state)=>state.subadmin);
const [formData,setFormData]=useState({
  name:'',
  email:'',
  password:'',
  confirmPassword:'',
  pattern:'',
  confirmPattern:'',
  
});

const handleInputChange=(e)=>{
  const {name,value}=e.target;
  setFormData({
    ...formData,
    [name]:value,
  });
};

const handleSubmit=async(e)=>{
  e.preventDefault();

  const {name,email,password,confirmPassword,pattern,confirmPattern}=formData;

  if(password!==confirmPassword){
    toast.error("Password does not match...")
    
  }
}



//   const [name,setName]=useState("");

//   const [userid,setUserId]=useState("");

//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const [password1,setPassword1]=useState("");
   const [showPassword1, setShowPassword1] = useState(false);

//   const [pattern, setPattern] = useState([]);
  const [isPatternLocked, setIsPatternLocked] = useState(false);
 

//   const [pattern1,setPattern1]=useState([]);
//   const [isPatternLocked1, setIsPatternLocked1] = useState(false);
 
// const [message,setMessage]=useState("")
// const [message1,setMessage1]=useState("")
  






  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

//   const handlePatternChange = (newPattern) => {
//     setPattern(newPattern);
//   };
//   const handlePatternChange1 = (newPattern1) => {
//     setPattern1(newPattern1);
//   };

//   const handleSubmit = () => {
//     if (pattern.length > 0) {
//       setIsPatternLocked(true);
//       setMessage(`Pattern entered: ${pattern.join("-")}`);
//     } else {
//       setMessage("Please draw a pattern!");
//     }
//   };
//   const handleSubmit1 = () => {
//     if (pattern1.length > 0) {
//       setIsPatternLocked1(true);
//       setMessage1(`Pattern entered: ${pattern1.join("-")}`);
//     } else {
//       setMessage1("Please draw a pattern!");
//     }
//   };

//   const handleOverallSubmit = async (e) => {
//     e.preventDefault();
//     if (!isPatternLocked || !isPatternLocked1) {
//       toast.error("Please set a pattern first!");
//       return;
//     }
  
  //   try {
  //     const result = await dispatch(
  //       subAdmin({
  //         username: name,
  //         email,
  //         password,
  //         pattern: pattern.join(""),
  //         pattern1: pattern1.join(""),
  //       })
  //     ).unwrap();
  
  //     if (result?.token) {
  //       toast.success("Login successful");
  //       navigate("/");
  //     } else {
  //       toast.error("Invalid token");
  //     }
  
  //     // Clear fields after successful submission
  //     setEmail("");
  //     setPassword("");
  //     setPattern([]);
  //     setPattern1([]);
  //     setIsPatternLocked(false);
  //     setIsPatternLocked1(false);
  //   } catch (error) {
  //     toast.error(error.message || "An error occurred during login.");
  //     setIsPatternLocked(false);
  //   }
  // };
  
  const handlePatternChange = (pattern) => {
    setFormData({
      ...formData,
      pattern,
    });
  };
  
  const handlePatternChange1 = (pattern1) => {
    setFormData({
      ...formData,
      confirmPattern: pattern1,
    });
  };
  return (
    <form>
    <div className="w-full h-full mx-auto container m-10 p-1">
      <div className="justify-between flex border-2 p-5">
     
        <Typography
          variant="h4"
          sx={{
            marginBottom: "5px",
            fontWeight: "400px",
            color: "#2563EB",
            fontSize: "22px",
          }}
        >
          SubAdmin Details
        </Typography>
        <Link to="/"><Button className="bg-gray-100 font-bold p-2 gap-2"><FaArrowLeft />Back</Button></Link>
      </div>
      
      <div className="grid grid-cols-2 gap-5 justify-center  border-l border-r border-b p-2">
        <div className="">
         
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                color: "",
                fontSize: "18px",
              }}
            >
              Username <span className="text-red-600">*</span>
            </Typography>
            <TextField
              placeholder="Enter Email"
              name="name"
              type="text"
                            value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: "7px", backgroundColor: "white" }}
            />
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                fontWeight: "500px",
                color: "",
                fontSize: "18px",
              }}
            >
              Unique Id <span className="text-red-600">*</span>
            </Typography>
            <TextField
              placeholder="Enter Email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: "7px", backgroundColor: "white" }}
            />
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                fontWeight: "500px",
                color: "",
                fontSize: "18px",
              }}
            >
              Password<span className="text-red-600">*</span>
            </Typography>
            <TextField
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: "7px", backgroundColor: "white" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Pattern lock for drawing */}
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                fontWeight: "500px",
                color: "",
                fontSize: "18px",
              }}
            >
              Pattern <span className="text-red-600">*</span>
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <div className="bg-gradient-to-t to-blue-500 from-blue-700 m-4">
                <PatternLock
                  width={300}
                  height={300}
                  pointSize={20}
                  path={formData.pattern}
                  onChange={handlePatternChange}
                  size={3}
                  lineColor="#3f51b5"
                  activePointColor="#3f51b5"
                  allowRepeat={false}
                  onFinish={handleSubmit }
                />
              </div>
            </Box>

            {/* <div className="justify-center items-center flex">
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </div> */}
          
        </div>
        <div className="">
         
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                color: "",
                fontSize: "18px",
              }}
            >
              Email <span className="text-red-600">*</span>
            </Typography>
            <TextField
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: "7px", backgroundColor: "white" }}
            />
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                fontWeight: "500px",
                color: "",
                fontSize: "18px",
              }}
            >
              Confirm Password <span className="text-red-600">*</span>
            </Typography>
            <TextField
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: "7px", backgroundColor: "white" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword1} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Pattern lock for drawing */}
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                fontWeight: "500px",
                color: "",
                fontSize: "18px",
              }}
            >
              Confirm Pattern <span className="text-red-600">*</span>
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <div className="bg-gradient-to-t to-blue-500 from-blue-700 m-4">
                <PatternLock
                  width={300}
                  height={300}
                  pointSize={20}
                  path={formData.confirmPattern}
                  onChange={handlePatternChange1}
                  size={3}
                  lineColor="#3f51b5"
                  activePointColor="#3f51b5"
                  allowRepeat={false}
                  onFinish={handleSubmit1}
                />
              </div>
            </Box>
         
        </div>
      </div>


      <div className="mt-5 ">
        <h2 className="text-blue-800 text-[20px] font-bold">Permission</h2>
      
        <div className="grid grid-cols-3 p-4 mt-2  border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
             User Details
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}}/> Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/> Write</span>
            </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
            Assets Management
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}}/>Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/>Write</span>
            </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
            Order History Management
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}}/>Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/>Write</span>
            </div>
            </div>


            <div className="grid grid-cols-3 p-4 border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
            Ticket Management
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}}/>Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/>Write</span>
            </div>
            </div>

            <div className="grid grid-cols-3 p-4 mt-2 mb-2 border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
            Block Management
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}}/>Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/>Write</span>
            </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
            Category Management
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}}/>Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/>Write</span>
            </div>
            </div>

            <div className="grid grid-cols-3 p-4 border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
            Email Template Management
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}}/>Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/>Write</span>
            </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
           Markets
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}}/>Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/>Write</span>
            </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
            Site Settings
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}}/>Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/>Write</span>
            </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
            Admin Banks Management
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}}/>Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/>Write</span>
            </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
            Career Management
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}}/>Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/>Write</span>
            </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
            P2P Order Management
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}}/>Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/>Write</span>
            </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
            <Typography
              variant="h4"
              sx={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "500px",
                
                font:"bold",
                fontSize: "18px",
                color:"#2563EB"
              }}
            >
            P2P Payment
            </Typography>
            <div className="flex gap-10">
            <span><CheckBox sx={{backgroundColor:"white"}} preventDefault/>Read</span>
            <span><CheckBox sx={{backgroundColor:"white"}}/>Write</span>
            </div>
            </div>
      
      </div>
      <div className="gap-6 flex m-3">
        <button className="p-2 rounded bg-blue-400" onClick={handleOverallSubmit}>Submit</button>
        <button className="p-2 rounded bg-red-600">Cancel</button>
        
      </div>

      <ToastContainer/>
    </div>
    </form>
  );
};

export default SubLoginPage;

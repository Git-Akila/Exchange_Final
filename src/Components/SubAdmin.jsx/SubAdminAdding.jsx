import React, { useEffect, useState } from "react";
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
import EmailIcon from "@mui/icons-material/Email";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CheckBox, Visibility, VisibilityOff } from "@mui/icons-material";
import PatternLock from "react-pattern-lock";
import { useDispatch, useSelector } from "react-redux";
import { subAdmin } from "../../Data/fetchUserData";
import { toast, ToastContainer } from "react-toastify";
import PermissionforSubAdminAdd from "../SubAdmin.jsx/PermissionforSubAdminAdd";

const SubAdminAdding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const token = localStorage.getItem("token");

  console.log("current page");
  const a = async () => {
    try {
      const response = await axios.get(
        "https://demoback.kairaaexchange.com/api/v1/unique_id",
        {
          headers: {
            Authorization: `${token}`, // Ensure token is formatted correctly
            "Content-Type": "application/json",
          },
        }
      );
      const fetchUserId = response.data.unique_id;
      setUserId(fetchUserId);
      setFormData((prevData) => ({ ...prevData, userId: fetchUserId }));
    } catch (err) {
      console.error(err); // Log any errors that occur
    }
  };

  useEffect(() => {
    a();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    userId: "",
    email: "",
    password: "",
    confirmPassword: "",
    pattern: [],
    confirmPattern: [],
    permissions: {
      user_details: { read: false, write: false },
      assets_management: { read: false, write: false },
      orderhistory_management:{read:false,write:false},
      ticket_management:{read:false,write:false},
      block_management:{read:false,write:false},
      category_management:{read:false,write:false},
      emailtemplate_management:{read:false,write:false},
      market:{read:false,write:false},
      site_settings:{read:false,write:false},
      adminbank_management:{read:false,write:false},
      career_management:{read:false,write:false},
      p2porder_management:{read:false,write:false},
    p2p_payment:{read:false,write:false},    },
  });

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    const [module, action] = name.split("."); // Split the name attribute to get module and action

    // Update the permissions dynamically
    setFormData((prevState) => ({
      ...prevState,
      permissions: {
        ...prevState.permissions,
        [module]: {
          ...prevState.permissions[module],
          [action]: checked, // Update the specific read/write permission
        },
      },
    }));
  };

  console.log("formData" + JSON.stringify(formData));
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [permissions, setPermissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email format");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (formData.pattern.toString() !== formData.confirmPattern.toString()) {
      toast.error("Patterns do not match");
      return;
    }

    // // Permissions will now be stored in formData.permissions
    // const permissions = Object.keys(formData.permissions).map((module) => ({
    //   module,
    //   ...formData.permissions[module],
    // }));
    const { permissions } = formData;

    // Dispatch formData including permissions
    dispatch(subAdmin(permissions));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handlePatternChange = (pattern) => {
    if (Array.isArray(pattern)) {
      setFormData((prev) => ({
        ...prev,
        pattern: pattern,
      }));
    } else {
      console.log("Pattern is not an array", pattern);
    }
  };

  const handlePatternChange1 = (pattern1) => {
    if (Array.isArray(pattern1)) {
      setFormData((prev) => ({
        ...prev,
        confirmPattern: pattern1,
      }));
    } else {
      console.log("Confirm PAttern is not an array" + pattern1);
    }
  };
  const handlePatternFinish = () => {
    if (Array.isArray(formData.pattern)) {
      if (formData.pattern.length < 3) {
        toast.error("Pattern must be at least 4 points long");
        return;
      }
      const patternString = formData.pattern.join("");
      setFormData((prev) => ({
        ...prev,
        pattern: patternString,
      }));
      toast.success("Pattern set successfully!");
    }
    // else {
    //   toast.error("Pattern data is not valid");
    // }
  };

  const handleConfirmPatternFinish = () => {
    if (Array.isArray(formData.confirmPattern)) {
      const confirmPatternString = formData.confirmPattern.join("");
      setFormData((prevState) => ({
        ...prevState,
        confirmPattern: confirmPatternString, // Store as a string
      }));
    }
    // else {
    //   toast.error("Confirm pattern data is not valid");
    // }

    // if (formData.confirmPattern.length < 4) {
    //   toast.error("Confirm Pattern must be at least 4 points long..");
    //   return;
    // }
    // if (formData.pattern !== formData.confirmPattern) {
    //   toast.error("Patterns do not match!");
    // } else {
    //   toast.success("Patterns match!");
    // }
  };
  return (
    <form>
      <div className="w-full h-full mx-auto container ">
        <div className="mx-10 my-10">
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
            <Link to="/">
              <Button className="bg-gray-100 font-bold p-2 gap-2">
                <FaArrowLeft />
                Back
              </Button>
            </Link>
          </div>

          <div className="grid xs:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 justify-center  border-l border-r border-b p-2">
            <div className="">
              {/* username */}
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
                placeholder="Enter name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                required
                sx={{ marginBottom: "7px", backgroundColor: "white" }}
              />
              {/* UniqueId */}
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
                placeholder={userId}
                name="userId"
                type="text"
                value={formData.userId}
                onChange={(e) =>
                  setFormData({ ...formData, userId: e.target.value })
                }
                fullWidth
                required
                sx={{ marginBottom: "7px", backgroundColor: "white" }}
              />

              {/* ---------------------------------------------------------------------------------- */}
              {/* Password Field */}
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  fontWeight: "500px",
                  fontSize: "18px",
                }}
              >
                Password <span className="text-red-600">*</span>
              </Typography>

              <TextField
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                name="password"
                fullWidth
                required
                sx={{ marginBottom: "7px", backgroundColor: "white" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
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
                    onFinish={handlePatternFinish}
                  />
                </div>
              </Box>
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
                type="email" // Ensures proper email input
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                name="email"
                fullWidth
                required
                sx={{ marginBottom: "7px", backgroundColor: "white" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <EmailIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Confirm Password Field */}
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  fontWeight: "500px",
                  fontSize: "18px",
                }}
              >
                Confirm Password <span className="text-red-600">*</span>
              </Typography>

              <TextField
                type={showPassword1 ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                name="confirmPassword"
                fullWidth
                required
                sx={{ marginBottom: "7px", backgroundColor: "white" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword1} edge="end">
                        {showPassword1 ? <Visibility /> : <VisibilityOff />}
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
                    onFinish={handleConfirmPatternFinish}
                  />
                </div>
              </Box>
            </div>
          </div>
          {/* <div className="mt-5">
            <h2 className="text-blue-800 text-[20px] font-bold">Permission</h2>
            <PermissionforSubAdminAdd permissions={permissions} />
          </div> */}
          <div className="mt-5 ">
            <h2 className="text-blue-800 text-[20px] font-bold">Permission</h2>

            <div className="grid grid-cols-3 p-4 mt-2  border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                User Details
              </Typography>
              <div className="flex gap-10">
                <label>
                  <input
                    type="checkbox"
                    name="user_details.read" // Name refers to the module and action
                    checked={formData.permissions.user_details.read} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="user_details.write" // Name refers to the module and action
                    checked={formData.permissions.user_details.write} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Write
                </label>
              </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                Assets Management
              </Typography>
              <div className="flex gap-10">
                <label>
                  <input
                    type="checkbox"
                    name="assets_management.read" // Name refers to the module and action
                    checked={formData.permissions.assets_management.read} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="assets_management.write" // Name refers to the module and action
                    checked={formData.permissions.assets_management.write} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Write
                </label>
              </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                Order History Management
              </Typography>


              {/* user_details: { read: false, write: false },
      assets_management: { read: false, write: false },
      orderhistory_management:{read:false,write:false},
      ticket_management:{read:false,write:false},
      block_management:{read:false,write:false},
      category_management:{read:false,write:false},
      emailtemplate_managemnet:{read:false,write:false},
      market:{read:false,write:false},
      site_settings:{read:false,write:false},
      adminbank_management:{read:false,write:false},
      career_management:{read:false,write:false},
      p2porder_management:{read:false,write:false},
    p2p_payment:{ */}
              <div className="flex gap-10">
              <label>
                  <input
                    type="checkbox"
                    name="assets_management.read" // Name refers to the module and action
                    checked={formData.permissions.orderhistory_management.read} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="assets_management.write" // Name refers to the module and action
                    checked={formData.permissions.orderhistory_management.write} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Write
                </label>
              </div>
            </div>

            <div className="grid grid-cols-3 p-4 border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                Ticket Management
              </Typography>
              <div className="flex gap-10">
              <label>
                  <input
                    type="checkbox"
                    name="assets_management.read" // Name refers to the module and action
                    checked={formData.permissions.ticket_management.read} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="assets_management.write" // Name refers to the module and action
                    checked={formData.permissions.ticket_management.write} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Write
                </label>
              </div>
            </div>

            <div className="grid grid-cols-3 p-4 mt-2 mb-2 border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                Block Management
              </Typography>
              <div className="flex gap-10">
              <label>
                  <input
                    type="checkbox"
                    name="assets_management.read" // Name refers to the module and action
                    checked={formData.permissions.block_management.read} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="assets_management.write" // Name refers to the module and action
                    checked={formData.permissions.block_management.write} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Write
                </label>
              </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                Category Management
              </Typography>
              <div className="flex gap-10">
              <label>
                  <input
                    type="checkbox"
                    name="assets_management.read" // Name refers to the module and action
                    checked={formData.permissions.category_management.read} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="assets_management.write" // Name refers to the module and action
                    checked={formData.permissions.category_management.write} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Write
                </label>
              </div>
            </div>

            <div className="grid grid-cols-3 p-4 border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                Email Template Management
              </Typography>
              <div className="flex gap-10">
              <label>
                  <input
                    type="checkbox"
                    name="assets_management.read" // Name refers to the module and action
                    checked={formData.permissions.emailtemplate_management.read} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="assets_management.write" // Name refers to the module and action
                    checked={formData.permissions.emailtemplate_management.write} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Write
                </label>
              </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                Markets
              </Typography>
              <div className="flex gap-10">
                <span>
                  <CheckBox sx={{ backgroundColor: "white" }} />
                  Read
                </span>
                <span>
                  <CheckBox sx={{ backgroundColor: "white" }} />
                  Write
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                Site Settings
              </Typography>
              <div className="flex gap-10">
                <span>
                  <CheckBox sx={{ backgroundColor: "white" }} />
                  Read
                </span>
                <span>
                  <CheckBox sx={{ backgroundColor: "white" }} />
                  Write
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                Admin Banks Management
              </Typography>
              <div className="flex gap-10">
                <span>
                  <CheckBox sx={{ backgroundColor: "white" }} />
                  Read
                </span>
                <span>
                  <CheckBox sx={{ backgroundColor: "white" }} />
                  Write
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                Career Management
              </Typography>
              <div className="flex gap-10">
                <span>
                  <CheckBox sx={{ backgroundColor: "white" }} />
                  Read
                </span>
                <span>
                  <CheckBox sx={{ backgroundColor: "white" }} />
                  Write
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                P2P Order Management
              </Typography>
              <div className="flex gap-10">
              <label>
                  <input
                    type="checkbox"
                    name="assets_management.read" // Name refers to the module and action
                    checked={formData.permissions.p2porder_management.read} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="assets_management.write" // Name refers to the module and action
                    checked={formData.permissions.p2porder_management.write} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Write
                </label>
              </div>
            </div>

            <div className="grid grid-cols-3 p-4  border">
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  fontWeight: "500px",

                  font: "bold",
                  fontSize: "18px",
                  color: "#2563EB",
                }}
              >
                P2P Payment
              </Typography>
              <div className="flex gap-10">
              <label>
                  <input
                    type="checkbox"
                    name="assets_management.read" // Name refers to the module and action
                    checked={formData.permissions.p2p_payment.read} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="assets_management.write" // Name refers to the module and action
                    checked={formData.permissions.p2p_payment.write} // Checked state from formData
                    onChange={handleInputChange} // Change handler
                  />
                  Write
                </label>
              </div>
            </div>
          </div>
          <div className="gap-6 flex m-3">
            <button className="p-2 rounded bg-blue-400" onClick={handleSubmit}>
              Submit
            </button>
            <button className="p-2 rounded bg-red-600">Cancel</button>
          </div>

          <ToastContainer />
        </div>
      </div>
    </form>
  );
};

export default SubAdminAdding;

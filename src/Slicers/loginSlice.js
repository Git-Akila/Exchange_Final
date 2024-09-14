import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import {loginUser} from '../Data/fetchUserData';


// export const loginUser = createAsyncThunk(
//     'loginUser',
//     async ({ email, password, pattern }, { rejectWithValue }) => {
//         console.log("ccccc");
//       try {
//         const response = await axios.post(
//           "https://demoback.kairaaexchange.com/api/v1/admin/login",
//           {
//             email,
//             password,
//             pattern,
//             deviceInfo: {
//               userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
//               os: "Windows",
//               browser: "Chrome",
//               device: "Unknown",
//               os_version: "windows-10",
//               browser_version: "126.0.0.0"
//             },
//             ipaddress: {
//               ip: ""
//             }
//           },
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               'Tag': 'admin',
//               'Authorization': 'token', 
//             }
//           }
//         );
  
        
//         if (response.status !== 200) {
//           const errorMessage = response.data.message || "Failed to log in";
//           console.error("Response Error: ", response.data); 
//           return rejectWithValue(errorMessage);
//         }
  
//         console.log("Login Successful. Data: ", response.data); 
//         localStorage.setItem("token", response.data.token); 
//         return response.data;
//       } catch (error) {
//         console.error("Error during login:", error); 
//         return rejectWithValue(error.response?.data?.message || error.message);
//       }
//     }
//   );
  

import {loginUser} from '../Data/fetchUserData'

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;  
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.error("Login failed:", action.error.message);
            });
    },
});

export default loginSlice.reducer;
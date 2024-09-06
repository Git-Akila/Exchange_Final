import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



//import {loginUser} from '../Data/fetchUserData';


export const loginUser = createAsyncThunk('loginUser', async ({ email, password, pattern }, thunkAPI) => {
    try {
        
        const response = await fetch("https://demoback.kairaaexchange.com/api/v1/admin/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Tag': 'admin',
                'Authorization': 'token',
            },
            body: JSON.stringify({ email, password, pattern, 
                deviceInfo: {
                    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                    "os": "Windows",
                    "browser": "Chrome",
                    "device": "Unknown",
                    "os_version": "windows-10",
                    "browser_version": "126.0.0.0"
                },
                ipaddress: {
                    "ip": ""
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message || "Failed to log in";
            return thunkAPI.rejectWithValue(errorMessage);
        }

        const data = await response.json();

        
        localStorage.setItem("token", data.token); 
        return data;  

    } catch (error) {
        console.error("Error during login:", error);
        return thunkAPI.rejectWithValue(error.message);
    }
});



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
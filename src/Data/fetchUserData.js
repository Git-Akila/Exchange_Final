import { createAsyncThunk } from '@reduxjs/toolkit';
// https://demoback.kairaaexchange.com/get_graph_data

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJhZG1pbl9sb2dpbiIsImlkIjoiNjM0YTllODRjMzlhYzJlZWZhN2ZkNTY1Iiwic3RhdHVzIjp0cnVlLCJpYXQiOjE3MjU2MjMwOTAsImV4cCI6MTcyNTYzMDI5MH0.jFf-f7U_cN1tfUvt0MB5IthIDhmO28fcW0yJyulyqQE";export const fetchUser = createAsyncThunk('fetchUser', async () => {
    const res = await fetch("https://demoback.kairaaexchange.com/api/v1/user/list", {
        method: 'POST',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
            'Tag': 'admin'
        }
    });
    
    if (!res.ok) {
        throw new Error('Failed to fetch user data');
    }
    
    const data = await res.json();
    console.log("API Response:", data); // Log the API response
    return data;
});


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



export const kycUserDetails=createAsyncThunk('kycUserDetails',async()=>{
    const res=await fetch("https://demoback.kairaaexchange.com/api/v1/user/view/66ab2cdba43f2e0c9d5f6c52 ",{
        method:'GET',
        headers:{
            'Tag':'admin',
           
            'Authorization':`${token}`,
        }

    });
    if(!res.ok){
        throw new Error("Failed to fetch user data");
    }
   const data= await res.json();
    return data;
})



export const graphData=createAsyncThunk('graphData',async()=>{
    const res=await fetch(" https://demoback.kairaaexchange.com/get_graph_data",{
        method:'GET',
        headers:{
            'Authorization':`${token}`,
            'Content-Type':'application/json',
            'Tag':'admin'
        }
    });
    if(!res.ok){
        throw new Error("Failed to fetch user data");
    }
    const data=await res.json();
     console.log("ggggggData"+data);
    return data;
})

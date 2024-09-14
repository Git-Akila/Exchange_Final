import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
// https://demoback.kairaaexchange.com/get_graph_data

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJhZG1pbl9sb2dpbiIsImlkIjoiNjM0YTllODRjMzlhYzJlZWZhN2ZkNTY1Iiwic3RhdHVzIjp0cnVlLCJpYXQiOjE3MjYyOTc3OTUsImV4cCI6MTcyNjMwNDk5NX0.ioaahMj6S-VxRMdM5LCtIzGkSP48zRMFTFsvosYbEBA";
//const token = localStorage.getItem("token");

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  try {
    const response = await axios.post(
      "https://demoback.kairaaexchange.com/api/v1/user/list",
      {},
      {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
          Tag: "admin",
        },
      }
    );
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch user data"
    );
  }
});
//-----------------------------------------LoginUser--------------------------------------------------------------------------------
export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ email, password, pattern }, thunkAPI) => {
    try {
      const response = await fetch(
        "https://demoback.kairaaexchange.com/api/v1/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Tag: "admin",
            Authorization: "token",
          },
          body: JSON.stringify({
            email,
            password,
            pattern,
            deviceInfo: {
              userAgent:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
              os: "Windows",
              browser: "Chrome",
              device: "Unknown",
              os_version: "windows-10",
              browser_version: "126.0.0.0",
            },
            ipaddress: {
              ip: "",
            },
          }),
        }
      );

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
  }
);
//-----------------------------------------------kycUserDetails----------------------------------------------------
export const kycUserDetails = createAsyncThunk(
  "kycUserDetails",
  async (_id) => {
    const res = await fetch(
      `https://demoback.kairaaexchange.com/api/v1/user/view/${_id}`,
      {
        method: "GET",
        headers: {
          Tag: "admin",

          Authorization: `${token}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data = await res.json();
    return data;
  }
);
//-----------------------------Graphdata----------------------------------------------------------------------

export const graphData = createAsyncThunk("graphData", async () => {
  const res = await fetch(
    " https://demoback.kairaaexchange.com/get_graph_data",
    {
      method: "GET",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
        Tag: "admin",
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  const data = await res.json();
  console.log("ggggggData" + data);
  return data;
});

//------------------------------------------CryptoAsset-------------------------------------------------------

// export const cryptoAsset = createAsyncThunk("cryptoAsset", async (_id) => {
//   console.log("asdfasfsafasd7688");

//   try {
//     console.log("asdfasfsafasd7688,", _id);
//     const res = await axios.post(
//       "https://demoback.kairaaexchange.com/api/v1/admin/user-crypto-assets",
//       { id: _id },
//       {
//         headers: {
//           Authorization: `${token}`,
//           "Content-Type": "application/json",
//           Tag: "admin",
//         },
//       }
//     );
//     console.log("APIRES"+res);
//     console.log("API Response23:", res.data);
//     console.log("cryptodatattt" , res.data.data);

//     if (!res.ok) {
//       throw new Error("Failed to fetch crypto assets");
//     }

//     const data = await res.data;
//     console.log("RESDATA"+data);
//     return data;
    
//   } catch (error) {
//     console.log("firsterrrr", error);
//     // return rejectWithValue(error.message);
//   }
// });

// export const cryptoAsset = createAsyncThunk("cryptoAsset", async (_id) => {
//   const res = await fetch(
//     `https://demoback.kairaaexchange.com/api/v1/admin/user-crypto-assets/${_id}`,
//     {
//       method: "GET",
//       headers: {
//         Tag: "admin",

//         Authorization: `${token}`,
//       },
//       body: JSON.stringify({id:_id, }),

//     }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch user data");
//   }
//   const data = await res.json();
//   console.log("daahjkklkjjkdslkklds"+data)
//   return data;
// });

export const cryptoAsset = createAsyncThunk("cryptoAsset", async (_id, { rejectWithValue }) => {
  // console.log("Fetching crypto assets for ID:", _id);

  try {
    const res = await axios.post(
      "https://demoback.kairaaexchange.com/api/v1/admin/user-crypto-assets",
      { id: _id },
      {
        headers: {
          Authorization: `${token}`, 
          "Content-Type": "application/json",
          Tag: "admin",
        },
      }
    );
    
   
    // console.log("API Response:", res);
    // console.log("API Response Data:", res.data);
    // console.log("Crypto Data:", res.data.data);

   
    return res.data;
    
  } catch (error) {
    console.log("Error fetching crypto assets:", error);

    // Use rejectWithValue to return the error message to the async thunk
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});


//--------------------------------Fiat -------------------------------------------------

export const FiatAsset=createAsyncThunk("FiatAsset",
  async(_id,{rejectWithValue})=>{
    console.log("Fetching API Data",_id);
    try{
      const res=await axios.post("https://demoback.kairaaexchange.com/api/v1/admin/user-fiat-assets",{id:_id},
        {
          headers:{
            'Authorization':`${token}`,
            'Content-Type':'application/json',
            'Tag':'admin',
          },
        }
      );
      return res.data;
    
    }catch(error){
      console.log("Fetching Error for Fiat"+error);
      return rejectWithValue(error.response?.data?.message|| error.message);
    }
  }
)


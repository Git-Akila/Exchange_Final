import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
// https://demoback.kairaaexchange.com/get_graph_data
// const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJhZG1pbl9sb2dpbiIsImlkIjoiNjM0YTllODRjMzlhYzJlZWZhN2ZkNTY1Iiwic3RhdHVzIjp0cnVlLCJpYXQiOjE3MjcwMjE5NTEsImV4cCI6MTcyNzAyOTE1MX0.0p_qy15Ydy4BTW1DFP9eD7RUu-i5piEesdeN4qGcC34";
const token = localStorage.getItem("token");
//const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJhZG1pbl9sb2dpbiIsImlkIjoiNjM0YTllODRjMzlhYzJlZWZhN2ZkNTY1Iiwic3RhdHVzIjp0cnVlLCJpYXQiOjE3MjY4ODk0MjEsImV4cCI6MTcyNjg5NjYyMX0.7n6dcSZOK8U2W6iH0DKZ7sBFDAQWztFLDMZVItNfVGQ";
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
    // console.log("API Response:", response.data);
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
  async ({ email, password, pattern }, { rejectWithValue }) =>
    
    {
       console.log("ccccc", "email, password, pattern");

      try {
        // const axios = require('axios');
        let data = JSON.stringify({
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
          username: email,
          password: password,
          pattern: pattern,
        });

        let config = {
          method: "post",
          url: "https://demoback.kairaaexchange.com/api/v1/admin/login",
          headers: {
            Tag: "admin",
            "Content-Type": "application/json",
          },
          data: data,
        };
        const response = await axios.request(config);

        console.log(
          "JSON.stringify(response.data)",
          JSON.stringify(response.data)
        );
        localStorage.setItem("token", response.data.token);

        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
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
  // console.log("ggggggData" + data);
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

export const cryptoAsset = createAsyncThunk(
  "cryptoAsset",
  async (_id, { rejectWithValue }) => {
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
  }
);

//--------------------------------Fiat -------------------------------------------------

export const FiatAsset = createAsyncThunk(
  "FiatAsset",
  async (_id, { rejectWithValue }) => {
    console.log("Fetching API Data", _id);
    try {
      const res = await axios.post(
        "https://demoback.kairaaexchange.com/api/v1/admin/user-fiat-assets",
        { id: _id },
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
            Tag: "admin",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log("Fetching Error for Fiat" + error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


//------------------------------------TradehistoryAsset------------------------------------------------------------------

export const TradehistoryAsset = createAsyncThunk(
  "TradehistoryAsset",
  async (_id, { rejectWithValue }) => {
    console.log("Fetching API Data", _id);
    try {
      const res = await axios.post(
        "https://demoback.kairaaexchange.com/api/v1/admin/user-tradehistory",
        { id: _id },
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
            Tag: "admin",
          },
        }
      );
      
      return res.data;
    } catch (error) {
      console.log("Fetching Error for Fiat" + error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


// ______________________________User Transaction for Wallet History___________________________

export const UserTransaction=createAsyncThunk("UserTransaction",
  async(_id,{rejectWithValue})=>{
    console.log("llllll"+token);
    try{
        const res=await axios.post(
          "https://demoback.kairaaexchange.com//api/v1/admin/user-transaction",
          {id:_id},
          {
            headers:{
              Authorization:`${token}`,
              'Content-Type':'application/json',
              'Tag':'admin',
            },
          },
        );
       console.log("API Res"+JSON.stringify(res.data));
        return res.data;
    }
    
    
    catch(err){
    console.log("There is something error"+err);
return rejectWithValue(err.res?.data?.message|| err.message);
    }
  })

import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
// https://demoback.kairaaexchange.com/get_graph_data

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJhZG1pbl9sb2dpbiIsImlkIjoiNjM0YTllODRjMzlhYzJlZWZhN2ZkNTY1Iiwic3RhdHVzIjp0cnVlLCJpYXQiOjE3MjYxMzA2NzYsImV4cCI6MTcyNjEzNzg3Nn0.lAC8X-cHl44uiqHw5wWMAJdqZYowhF0T3XvOWb4zcds";
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

export const cryptoAsset = createAsyncThunk("cryptoAsset", async (_id) => {
  console.log("asdfasfsafasd7688");

  try {
    console.log("asdfasfsafasd7688,", _id);
    // const res = await fetch(
    //   `https://demoback.kairaaexchange.com/api/v1/admin/user-crypto-assets`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Authorization: `${token}`,
    //       "Content-Type": "application/json",
    //       Tag: "admin",
    //     },
    //     body: JSON.stringify({
    //       id: _id,
    //     }),
    //   }
    // );
    // console.log("asdfasfres",res.json());

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
    console.log("API Response23:", res.data);

    if (!res.ok) {
      throw new Error("Failed to fetch crypto assets");
    }

    const data = await res.json();
    console.log("cryptodatattt" + data.data);
    return data;
  } catch (error) {
    console.log("firsterrrr", error);
    // return rejectWithValue(error.message);
  }
});

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

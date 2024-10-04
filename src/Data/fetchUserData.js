import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { useEffect } from "react";
// https://demoback.kairaaexchange.com/get_graph_data
const token = localStorage.getItem("token");

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
  async ({ email, password, pattern }, { rejectWithValue }) => {
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
//__________________________________________________SubAdmin__________________________________
export const subAdmin = createAsyncThunk(
  "subAdmin",
  async ({
    username,
    email,
    password,
    confirm_password,
    pattern,
    confirm_pattern,
  }) => {
    try {
      let data = JSON.stringify({
        permission: [
          {
            module: "user_details",
            module_name: "User Details",
            read: true,
            write: true,
            submodule: [
              {
                submodule: "personal_info",
                submodule_name: "Personal Info",
                read: false,
                write: false,
              },
              {
                submodule: "security",
                submodule_name: "Security",
                read: false,
                write: false,
              },
              {
                submodule: "assets",
                submodule_name: "Assets",
                read: false,
                write: false,
              },
              {
                submodule: "asset_history",
                submodule_name: "Asset History",
                read: false,
                write: false,
              },
              {
                submodule: "open_orders",
                submodule_name: "Open Orders",
                read: false,
                write: false,
              },
              {
                submodule: "orders_history",
                submodule_name: "Orders History",
                read: false,
                write: false,
              },
              {
                submodule: "user_activity",
                submodule_name: "User Activity",
                read: false,
                write: false,
              },
              {
                submodule: "referral",
                submodule_name: "Referral",
                read: false,
                write: false,
              },
              {
                submodule: "tickets",
                submodule_name: "Tickets",
                read: false,
                write: false,
              },
              {
                submodule: "airdrop",
                submodule_name: "Airdrop",
                read: false,
                write: false,
              },
              {
                submodule: "p2p_wallet",
                submodule_name: "P2P Wallet",
                read: false,
                write: false,
              },
              {
                submodule: "swap_history",
                submodule_name: "Swap History",
                read: false,
                write: false,
              },
            ],
          },
          {
            module: "assets_management",
            module_name: "Assets Management",
            read: true,
            write: true,
          },
          {
            module: "assets_transactions",
            module_name: "Assets Transactions",
            read: false,
            write: false,
          },
          {
            module: "order_history_management",
            module_name: "Order History Management",
            read: false,
            write: false,
          },
          {
            module: "tickets_management",
            module_name: "Tickets Management",
            read: false,
            write: false,
          },
          {
            module: "block_management",
            module_name: "Block Management",
            read: false,
            write: false,
          },
          {
            module: "category_management",
            module_name: "Category Management",
            read: false,
            write: false,
          },
          {
            module: "email_template_management",
            module_name: "Email Template Management",
            read: false,
            write: false,
          },
          {
            module: "markets",
            module_name: "Markets",
            read: false,
            write: false,
          },
          {
            module: "site_settings",
            module_name: "Site Settings",
            read: false,
            write: false,
          },
          {
            module: "admin_banks",
            module_name: "Admin Banks",
            read: false,
            write: false,
          },
          {
            module: "career_mgmt",
            module_name: " career_mgmt",
            read: false,
            write: false,
          },
          {
            module: "p2porder_management",
            module_name: "P2P Order Management",
            read: false,
            write: false,
          },
          {
            module: "p2p_payments",
            module_name: "P2P Payment",
            read: false,
            write: false,
          },
        ],
        password: password,
        email: email,
        username: username,
        confirm_password: confirm_password,
        pattern: pattern,
        confirm_pattern: confirm_pattern,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://demoback.kairaaexchange.com/api/v1/subadmin/add-new",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJhZG1pbl9sb2dpbiIsImlkIjoiNjM0YTllODRjMzlhYzJlZWZhN2ZkNTY1Iiwic3RhdHVzIjp0cnVlLCJpYXQiOjE3MjgwMzU0MzksImV4cCI6MTcyODA0MjYzOX0.QOirbnTHm90m5rMbrCBPraHeozgV7t3nxfecWFO7REo",
          "Content-Type": "application/json",
          Tag: "admin",
        },
        data: data,
      };

      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch user data"
      );
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

export const UserTransaction = createAsyncThunk(
  "UserTransaction",
  async (_id, { rejectWithValue }) => {
    console.log("llllll" + token);
    try {
      const res = await axios.post(
        "https://demoback.kairaaexchange.com//api/v1/admin/user-transaction",
        { id: _id },
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
            Tag: "admin",
          },
        }
      );
      console.log("API Res" + JSON.stringify(res.data));
      return res.data;
    } catch (err) {
      console.log("There is something error" + err);
      return rejectWithValue(err.res?.data?.message || err.message);
    }
  }
);

import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
const token=localStorage.getItem("token");

export const kycApproved = createAsyncThunk(
  "kycApproved",
  
  async ({_id, pan},{ rejectWithValue }) => {
    try {
      const res = await axios.post(
        `https://demoback.kairaaexchange.com/api/v1/user/approve-kyc/${_id}/${pan}`,
       {}, {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
            Tag: "admin",
          },
        }
      );
      console.log("kycApprovedData"+res);
      return res.data;
    } catch (error) {
      console.log("Error fetching for Approved", error);
      return rejectWithValue(error.res?.data?.message || error);
    }
  }
);

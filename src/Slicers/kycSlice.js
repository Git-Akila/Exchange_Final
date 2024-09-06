import {createSlice} from  '@reduxjs/toolkit';
import {kycUserDetails} from '../Data/fetchUserData';

const kycSlice = createSlice({
  name: 'kyclist',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(kycUserDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(kycUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(kycUserDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default kycSlice.reducer;

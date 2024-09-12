import { createSlice } from '@reduxjs/toolkit';
import { cryptoAsset } from '../Data/fetchUserData';

const initialState = {
  data: null,
  isLoading: false,
  isError: false,
};

const cryptoSlice = createSlice({
  name: 'cryptoData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cryptoAsset.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cryptoAsset.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;  
      })
      .addCase(cryptoAsset.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default cryptoSlice.reducer;

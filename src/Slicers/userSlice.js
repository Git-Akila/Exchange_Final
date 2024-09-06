import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../Data/fetchUserData';

const userlistSlice = createSlice({
  name: 'userlist',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload; 
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userlistSlice.reducer;

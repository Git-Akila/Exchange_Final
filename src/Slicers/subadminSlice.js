import {createSlice} from '@reduxjs/toolkit';
import {subAdmin} from '../Data/fetchUserData';

const subAdminSlice=createSlice({
    name:'subadmin',
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(subAdmin.pending,(state)=>{
            state.isLoading=true;
            state.isError=false;
        })
        .addCase(subAdmin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload; 
          })
        .addCase(subAdmin.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
        });
    },
});
export default subAdminSlice.reducer;
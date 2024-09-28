import {createSlice} from '@reduxjs/toolkit';
import { kycApproved } from '../Data/kycData';

const kycApprovedSlice=createSlice({
    name:'kycApproved',
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(kycApproved.pending,(state)=>{
                state.isLoading=true;
                state.isError=false;
            })
            .addCase(kycApproved.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.data=action.payload;
            })
            .addCase(kycApproved.rejected,(state)=>{
                state.isLoading=false;
                state.isError=true;
            });
        },
    });
   export default kycApprovedSlice.reducer;
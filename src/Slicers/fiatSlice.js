import { createSlice } from '@reduxjs/toolkit';
import {FiatAsset} from '../Data/fetchUserData';

const initialState={
    data:null,
    isLoading:false,
    isError:false,
};

const fiatSlice=createSlice({
    name:'fiatData',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(FiatAsset.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(FiatAsset.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        })
        .addCase(FiatAsset.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
        })
    }
});
export default fiatSlice.reducer;
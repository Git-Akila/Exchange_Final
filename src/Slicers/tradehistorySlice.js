import { createSlice } from '@reduxjs/toolkit';
import {TradehistoryAsset} from '../Data/fetchUserData';

const initialState={
    data:null,
    isLoading:false,
    isError:false,
};

const tradehistorySlice=createSlice({
    name:'tradehistoryData',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(TradehistoryAsset.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(TradehistoryAsset.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        })
        .addCase(TradehistoryAsset.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
        })
    }
});
export default tradehistorySlice.reducer;
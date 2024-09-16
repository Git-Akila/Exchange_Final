import {createSlice} from '@reduxjs/toolkit';
import {UserTransaction} from '../Data/fetchUserData';

const initialState={
    data:null,
    isLoading:false,
    isError:false,
};

const UserTransactionSlice=createSlice({
    name:'UserTransaction',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(UserTransaction.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(UserTransaction.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        })
        .addCase(UserTransaction.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;

        })
    }
})

export default UserTransactionSlice.reducer;
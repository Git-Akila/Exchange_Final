import { createSlice } from '@reduxjs/toolkit';
import {graphData} from '../Data/fetchUserData';


const graphSlice=createSlice({
    name:'graph_data',
    initialState:{
        graphUser:[],
        status:'idle',
        error:null,
    },

    reducers:{},

    extraReducers:(builder)=>{
        builder
        .addCase(graphData.pending,(state)=>{
            state.status='loading';
        })
        .addCase(graphData.fulfilled,(state,action)=>{
            state.status = 'succeeded';
                state. graphUser = action.payload;
        })
        .addCase(graphData.rejected,(state,action)=>{
            state.status='failed';
            state.error=action.error.message;
        });
    },
});

export default graphSlice.reducer;